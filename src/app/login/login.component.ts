import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('+++++++++++++++++++');
        console.log(this.username);
        console.log(this.password);
        const role = res.authorities?.[0]?.authority;
        console.log(role);
        this.auth.saveAuth(this.username, role, this.password);
        this.router.navigate(['/home']); 
        console.log('Login OK', res);
      },
      error: err => {
        console.error('Error de login', err);
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
}