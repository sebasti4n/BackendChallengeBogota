import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolicitudNuevaComponent } from './home/solicitud-nueva/solicitud-nueva.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  // cuando no haya nada en la URL -> va al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'nuevaSolicitud', component: SolicitudNuevaComponent},
  { path: 'historial', component: HistoryComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
