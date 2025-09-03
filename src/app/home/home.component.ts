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

  approve(id: number, comment: string) {
    const request = this.dataSourceTable.find(r => r.id === id);
    if (request && request.approver === localStorage.getItem("user")) {
      this.service.approveRequest(id, comment).subscribe({
        next: res => {
          console.log('Aprobado', res);
          this.getData();
        },
        error: err => console.error('Error al aprobar', err)
      });
    }
  }

  reject(id: number, comment: string) {
    const request = this.dataSourceTable.find(r => r.id === id);
    if (request && request.approver === localStorage.getItem("user")) {
      this.service.rejectRequest(id, comment).subscribe({
        next: res => {
          console.log('Rechazado', res);
          this.getData();
        },
        error: err => console.error('Error al rechazar', err)
      });
    }
  }

  
  ngOnInit(): void {
    this.getData();
  } 

showModal = false;
actionType = '';
request : approvalRequests | null = null;;
comment = '';

openActionModal(type: string, request: approvalRequests) {
  this.actionType = type;
  this.request = request;
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
  this.comment = '';
}

confirmAction() {
  if (this.request === null) return;
  if (this.actionType === 'APPROVED'){
    this.approve(this.request.id!, this.comment);
  } else if (this.actionType === 'REJECTED') {
    this.reject(this.request.id!, this.comment)
  }
  this.closeModal();
}
}