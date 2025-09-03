import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { historyRequests } from "../models/historyRequest.model";

@Injectable({
    providedIn: 'root'
  })
export class HistoryRequestService{

    
    public url : string = environment.ApiUrlHistoryRequests;

    constructor(private http : HttpClient){}

    getList():Observable<historyRequests[]> {

        return this.http.get<historyRequests[]>(this.url);

    }

}