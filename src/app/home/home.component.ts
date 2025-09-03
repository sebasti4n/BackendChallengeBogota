import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { approvalRequests } from 'src/app/core/models/approvalRequests.model';
import { ApprovalRequestService } from 'src/app/core/services/approvalRequests.service';
import { RoleService } from '../core/services/role.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sidenav: any;
  
  public  dataSourceTable : Array<approvalRequests> = [];
  
  columnsToDisplay = ['Id', 'Title', 'Solicitante', 'Descripción', "Responsable", "Tipo", " Estado"];

  constructor(public service : ApprovalRequestService, public roleService : RoleService){}

  getData () {
    this.service.getList().subscribe(resp=>{this.dataSourceTable=resp;
                                            console.log(this.dataSourceTable)
                                            }
                                    );
  }

  approve(id: number) {
    console.log("Reject solicitud*");
    console.log(this.dataSourceTable[id].approver);
    console.log(localStorage.getItem("user"));
    if (this.dataSourceTable[id].approver === localStorage.getItem("user")){
      console.log("Reject solicitud");
      this.service.approveRequest(this.dataSourceTable[id].id!,  "Rechazado por políticas")
      .subscribe({
        next: res => {
          console.log('Aprobado', res);
          this.getData(); // refrescar la tabla
        },
        error: err => console.error('Error al aprobar', err)
      });
    }
  }

  reject(id: number) {
    console.log("Reject solicitud*");
    console.log(this.dataSourceTable[id].approver);
    console.log(localStorage.getItem("user"));
    if (this.dataSourceTable[id].approver === localStorage.getItem("user")){
      console.log("Reject solicitud");
      this.service.rejectRequest(this.dataSourceTable[id].id!, "Rechazado por políticas")
      .subscribe({
        next: res => {
          console.log('Rechazado', res);
          this.getData(); // refrescar la tabla
        },
        error: err => console.error('Error al rechazar', err)
      });
    }  
  }


  
  ngOnInit(): void {
    this.getData();
  } 
}