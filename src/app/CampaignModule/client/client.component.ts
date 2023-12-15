import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { Field } from '../models/Field';
import { AuthenticationService } from '../services/AuthService/authentication.service';
import { ClientService } from '../services/clientService/client.service';
import { FieldService } from '../services/fieldService/field.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  fields:any[]=[]
  clients:Client[]=[]

  selectedClient:Client = {
    id:0,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: 0,
    gender: "",
    occupation: "",
    country: "",
    field_id: 0
};
  client:any={}
  showForm = false;
  isEditing = false;
  private token = localStorage.getItem('token')||'';
  connectUser:any={}

  constructor(private clientService:ClientService,private router:Router,private authService:AuthenticationService,private fieldService:FieldService) { }

  ngOnInit(): void {
    this.getClients()
    this.getUserByToken()
    this.getFields()
  }
  getFieldNameById(id: number): string {
    const field = this.fields.find(field => field.id === id);
    return field ? field.field : '';
  }
  toggleForm() {
    this.showForm = !this.showForm; // Basculez entre afficher et masquer le formulaire
  }
  CloseForm(addForm: NgForm) {
    this.toggleForm() ;
    addForm.resetForm();
    this.router.navigate(['/clients'])
  }
  toggleEditing(id:number) {
    this.isEditing = !this.isEditing;
  }
  openModal(client: Client): void {
    this.selectedClient = client;
  }
  closeModal(): void {
    this.selectedClient.id = 0;
  }
  getClients(){
    return this.clientService.getClients().subscribe(
      (value:Client[])=>{this.clients=value},
      (error:HttpErrorResponse)=>{alert(error)}
    );
  }
  getFields(){
    return this.fieldService.getFields().subscribe(
      (value:Field[])=>{this.fields=value},
      (error:HttpErrorResponse)=>{alert(error)}
    );
  }
  getClientById(id:number){
    this.clientService.getClientById(id).subscribe(
      (data)=>this.client=data)
  }
  
  addClient(addForm:NgForm){
    if(addForm.valid){
    this.clientService.addClient(this.client).subscribe(
      (response) => console.log(response),
      (error:HttpErrorResponse) => alert(error.message)
    );
    }
    location.reload()
    this.router.navigate(["/clients"])
  }
  getUserByToken(){
    this.authService.getUserByToken(this.token).subscribe(
      (data)=>this.connectUser=data)
  }
 
  deleteClient(id:number){
    this.clientService.deleteClientById(id).subscribe(
      (response) => { location.reload()},
      (error:HttpErrorResponse) => alert(error.message)
    );
  }
  updateClient(){
    this.clientService.UpdateClient(this.selectedClient).subscribe(
      (response) => console.log(response),
      (error:HttpErrorResponse) => alert(error.message)
    );
    location.reload()
  }
}


