import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardMainComponent } from './admin-dashboard/admin-dashboard-main/admin-dashboard-main.component';
import { RegisterEmployeesComponent } from './admin-dashboard/Employees/register-employees/register-employees.component';
import { ViewEmployeesComponent } from './admin-dashboard/Employees/view-employees/view-employees.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { ProviderComponent } from './provider/provider.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmailComponent } from './email/email.component';
import { TwofactorComponent } from './twofactor/twofactor.component';
import { LocalStorageService } from './TokenClass';
import { OrganisationComponent } from './ComponentsEvent/organisation/organisation.component';
import { EvenementComponent } from './ComponentsEvent/Evenement/evenement.component';
import { OrganisateurComponent } from './ComponentsEvent/organisateur/organisateur.component';
import { Sidebar3Component } from './sidebar3/sidebar3/sidebar3.component';
import { CalendarComponent } from './ComponentsEvent/calendar/calendar.component';
import { ViewprovidersComponent } from './viewproviders/viewproviders.component';

import { Sibebar4Component } from './CampaignModule/sibebar4/sibebar4.component';
import { ClientComponent } from './CampaignModule/client/client.component';
import { ProduitComponent } from './CampaignModule/produit/produit.component';
import { CampaignComponent } from './CampaignModule/campaign/campaign.component';
import { CampaignTargetsComponent } from './CampaignModule/campaign-targets/campaign-targets.component';
import { QuestionnaireComponent } from './CampaignModule/questionnaire/questionnaire.component';
import { ReceiveResponsesComponent } from './CampaignModule/receive-responses/receive-responses.component';
import { RegisterTfaComponent } from './CampaignModule/register-tfa/register-tfa.component';
import { LoginTfaComponent } from './CampaignModule/login-tfa/login-tfa.component';
import { Header4Component } from './CampaignModule/header4/header4.component';
import { SuccessComponent } from './CampaignModule/success/success.component';

import { FieldComponent } from './CampaignModule/field/field.component';

import { RegisterLoginComponent } from './ComponentsEvent/register-login/register-login.component';
import { LoginRegisterComponent } from './ComponentsEvent/login-register/login-register.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { LoginemployeeComponent } from './components/loginemployee/loginemployee.component';
import { DepartementComponent } from './components/departement/departement.component';

import { TasksComponent } from './TBSgestionProjet/tasks/tasks.component';
import { ProjectComponent } from './TBSgestionProjet/project/project.component';
import { AuthComponent } from './TBSgestionProjet/auth/auth.component';
import { RxStompService } from '@stomp/ng2-stompjs';
import { NotifierModule } from 'angular-notifier';





@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardMainComponent,
    RegisterEmployeesComponent,
    ViewEmployeesComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ListProductsComponent,
    SidebarComponent,
    RequisitionComponent,
    ProviderComponent,
    HeaderComponent,
    CategoryComponent,
    Sidebar2Component,
    ViewemployeeComponent,
    EmailComponent,
    TwofactorComponent,
    OrganisationComponent,
    EvenementComponent,
    OrganisateurComponent,
    Sidebar3Component,
    CalendarComponent,
    ViewprovidersComponent,

    Sibebar4Component,
    ClientComponent,
    ProduitComponent,
    CampaignComponent,
    CampaignTargetsComponent,
    QuestionnaireComponent,
    ReceiveResponsesComponent,
    RegisterTfaComponent,
    LoginTfaComponent,
    Header4Component,
    SuccessComponent,

    FieldComponent,
    RegisterLoginComponent,
    LoginRegisterComponent,

    
    EmployeesComponent,
    LoginemployeeComponent,
    DepartementComponent,
    
    TasksComponent,
    ProjectComponent,
    AuthComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    CommonModule
    

    NotifierModule




  ],
  providers: [DatePipe,
    LocalStorageService,
    RxStompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
