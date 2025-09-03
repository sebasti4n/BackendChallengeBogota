import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { approvalRequests } from 'src/app/core/models/approvalRequests.model';
import { ApprovalRequestService } from 'src/app/core/services/approvalRequests.service';
import { historyRequests } from '../core/models/historyRequest.model';
import { HistoryRequestService } from '../core/services/historyService.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  sidenav: any;
  
  public  dataSourceTable : Array<historyRequests> = [];
  
  columnsToDisplay = ['Id', 'Id Solicitud', 'Estado', 'Acción de', "Comentario", "Fecha", " + "];

  constructor(public service : HistoryRequestService){}

  getData () {
    this.service.getList().subscribe(resp=>{this.dataSourceTable=resp;
                                            console.log(this.dataSourceTable)
                                            }
                                    );
  }
  
  ngOnInit(): void {
    this.getData();
  } 
}