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
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [DatePipe,
    LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
