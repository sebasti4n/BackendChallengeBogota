import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { approvalRequests } from "../models/approvalRequests.model";

@Injectable({
    providedIn: 'root'
  })
export class ApprovalRequestService{

     public url : string = environment.ApiUrlApprovalRequests;
    
    
    approveRequest(id: number, comment: string) {
        console.log("Aprove Request")
        return this.http.post(this.url + `/${id}/approve`, null, {
            params: { comment }
        });
    }

    rejectRequest(id: number, comment: string) {
        console.log("Reject Request")
        return this.http.post(this.url + `/${id}/reject`, null, {
            params: { comment }
        });
    }

    constructor(private http : HttpClient){}

    getList():Observable<approvalRequests[]> {

        return this.http.get<approvalRequests[]>(this.url);

    }

    save(request : approvalRequests) {

        this.http.post(this.url, request)
        .subscribe({
            next: response => {console.log("Respuesta Post:", response); 
                               this.getList();
            },
            error: err => console.log("Error al guardar :", err),
            complete: () => console.log("Petición completada")
            });

    }
}