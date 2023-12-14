import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentifService } from 'src/app/services/servicesEmployees/authentif.service';

@Component({
  selector: 'app-loginemployee',
  templateUrl: './loginemployee.component.html',
  styleUrls: ['./loginemployee.component.css']
})
export class LoginemployeeComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authentifService: AuthentifService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authentifService.authenticate(this.email, this.password).subscribe(
      (response) => {
        const token = response.token; 
        const msg=response.message;
        console.log(token);
        console.log(msg);
        this.authentifService.saveToken(token);
        this.router.navigate(['/employees']); // Redirigez l'utilisateur vers la page après la connexion
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}

