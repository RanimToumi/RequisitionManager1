import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { AuthenticationService } from '../services/AuthService/authentication.service';
import { ProductService } from '../services/productService/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  product:Product = {
    id:7,
    name: "",
    price: 0
};
  selectedProduct: Product = {
    id:0,
    name: "",
    price: 0
};
  products:Product[]=[]
  showForm = false
  isEditing = false
  private token = localStorage.getItem('token')||'';
  connectUser:any={}
  isLoggedIn=false

  constructor(private productService:ProductService,private router:Router,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getUserByToken()
  }
  getUserByToken(){
    this.authService.getUserByToken(this.token).subscribe(
      (data)=>this.connectUser=data)
  }
  toggleForm() {
    this.showForm = !this.showForm; // Basculez entre afficher et masquer le formulaire
  }
  CloseForm(addForm: NgForm) {
    this.toggleForm() ;
    addForm.resetForm();
  }
  openModal(product: Product): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct.id = 0;
  }
  toggleEditing(id:number) {
    this.isEditing = !this.isEditing;
  }
  getProducts(){
    this.productService.getProducts().subscribe(
      (response)=>this.products=response,
      (error:HttpErrorResponse)=>alert(error.message)
    );
  }
  addProduct(addForm:NgForm){
    if(addForm.valid){
    this.productService.addProduct(this.product).subscribe(
      (response) => console.log(response),
      (error:HttpErrorResponse) => alert(error.message)
    );
    }
    location.reload()
  }
  updateProduct(){

    this.productService.UpdateProduct(this.selectedProduct).subscribe(
      (response) => console.log(response),
      (error:HttpErrorResponse) => alert(error.message)
    );
    location.reload()
  }
  deleteProduct(id:number){
    this.productService.deleteProductById(id).subscribe(
      (response) => { location.reload()},
      (error:HttpErrorResponse) => alert(error.message)
    );
  }
  getProductById(id:number){
    this.productService.getProductById(id).subscribe(
      (data)=>this.product=data)
  }
 
}
