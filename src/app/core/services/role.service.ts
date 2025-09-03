import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  getRole(): string | null {
    return localStorage.getItem("role");
  }

  isResponsable(): boolean {
    return this.getRole() === "ROLE_RESPONSABLE";
  }

  isSolicitante(): boolean {
    return this.getRole() === "ROLE_SOLICITANTE";
  }
}