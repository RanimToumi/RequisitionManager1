import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Field } from '../models/Field';
import { AuthenticationService } from '../services/AuthService/authentication.service';
import { FieldService } from '../services/fieldService/field.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  field:any={}
  fields:Field[]=[]
  showForm = false
  isEditing = false
  private token = localStorage.getItem('token')||'';
  connectUser:any={}
  isLoggedIn=false

  constructor(private fieldService:FieldService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getFields()
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
  addField(addForm:NgForm){
    if(addForm.valid){
    this.fieldService.addField(this.field).subscribe(
      (response) => console.log(response),
      (error:HttpErrorResponse) => alert(error.message)
    );
    }
    location.reload()
  }
  getFields(){
    this.fieldService.getFields().subscribe(
      (response)=>this.fields=response,
      (error:HttpErrorResponse)=>alert(error.message)
    );
  }

}
