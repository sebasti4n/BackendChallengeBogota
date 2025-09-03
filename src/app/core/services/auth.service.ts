import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api'; // tu backend

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    this.logout();
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    console.log('+++++++++++++++++++');
    console.log(username);
    console.log(password);
    return this.http.get(this.apiUrl + '/user', { headers });
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: token ? token : ''
    });
  }

  saveAuth(username: string, role: string, password: string) {
    this.logout();
    const token = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', username); 
    localStorage.setItem("role", role);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
