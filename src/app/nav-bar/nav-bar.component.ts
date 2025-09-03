import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent {
  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
