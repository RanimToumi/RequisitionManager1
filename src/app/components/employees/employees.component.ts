import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from 'src/app/models/models/departement';
import { EmployeeDTO } from 'src/app/models/models/employeesDTO';
import { AuthenticationService } from 'src/app/services/authService/authentication.service';
import { AuthentifService } from 'src/app/services/servicesEmployees/authentif.service';
import { DepartementService } from 'src/app/services/servicesEmployees/departement.service';
import { EmployeesService } from 'src/app/services/servicesEmployees/employees.service';
declare var $: any; // Déclaration de jQuery
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit,AfterViewInit {
  searchQuery: string = ''; // Modèle de recherche

  departements: Departement[] = [];

  employees: EmployeeDTO[] = [];

  
  showForm = false;
  isEditing = false;
  employee: EmployeeDTO = {
    id: 0,
    firstName: '',
    lastName: '',
    email: "",
    role: '',
    password: '',
    departmentId:0
  };

  constructor(
    private employeeService: EmployeesService,
    private authService: AuthentifService,
    private departementService: DepartementService
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();

    this.loadDepartements();
  }


  ngAfterViewInit() {
    // Initialisez Bootstrap SelectPicker après le rendu de la vue
    $(document).ready(function () {
      $('.selectpicker').selectpicker();
    });
  }
  loadDepartements() {
    // Appelez votre service pour récupérer les départements
    this.departementService.getAllDepartments().subscribe(
      (data) => {
        // Mettez à jour la liste des départements
        this.departements = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des départements :', error);
      }
    );
  }




  logout() {
    // Déconnectez l'utilisateur et redirigez-le vers la page de connexion
    this.authService.logout();
  }

  toggleForm() {
    this.showForm = !this.showForm; // Basculez entre afficher et masquer le formulaire
  }
  CloseForm(addForm: NgForm) {
    this.toggleForm();
    addForm.resetForm();
  }
  toggleEditing(id: number) {
    this.isEditing = !this.isEditing;
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (result) => {
        this.employees = result;
        console.log(this.employees);
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );
  }

  addEmployee(addForm: NgForm) {
    if (addForm.valid) {
      // Vérifiez si le formulaire est valide avant d'ajouter le fournisseur
      this.employeeService.AddEmployee(this.employee).subscribe(
        () => {
          alert('employee is added successfully');
          // Réinitialisez le formulaire après l'ajout si nécessaire
          addForm.resetForm();
        },
        (error) => {
          console.error('Error add employee:', error);
        }
      );
    }
  }

  UpdateEmployee(idEmployee: number, employee: EmployeeDTO) {
    this.employeeService.UpdateEmployee(idEmployee, employee).subscribe(
      () => {
        alert('successful update.');
      },
      (error) => {
        console.error('Error update category:', error);
      }
    );
  }

  DeleteEmployee(idEmployee: number) {
    this.employeeService.DeleteEmployee(idEmployee).subscribe(
      () => {
        alert('provider' + idEmployee + 'is deleted  successfully');

        // La suppression a réussi, mettez à jour la liste des fournisseurs

        this.employeeService.getAllEmployees();
        console.log(this.employees);
      },
      (error) => {
        console.error('Error Delete employee:', error);
      }
    );
  }

  // editingEmployee: EmployeeDTO | null = null; // Ajoutez cette ligne

  // setEditingEmployee(employee: EmployeeDTO | null) {
  //   this.editingEmployee = employee;
  // }

  // Dans votre classe de composant
  editingEmployee: EmployeeDTO | null = null;

  setEditingEmployee(employee: EmployeeDTO | null): void {
    // Si l'employé est déjà en cours d'édition, fermez le formulaire en le définissant sur null
    if (this.editingEmployee === employee) {
      this.editingEmployee = null;
    } else {
      // Sinon, ouvrez le formulaire pour l'employé cliqué
      this.editingEmployee = employee;
    }
  }
}
