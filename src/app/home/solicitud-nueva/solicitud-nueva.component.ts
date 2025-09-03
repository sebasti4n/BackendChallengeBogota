import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { approvalRequests } from 'src/app/core/models/approvalRequests.model';
import { ApprovalRequestService } from 'src/app/core/services/approvalRequests.service';

@Component({
  selector: 'app-solicitud-nueva',
  templateUrl: './solicitud-nueva.component.html',
  styleUrls: ['./solicitud-nueva.component.css']
})
export class SolicitudNuevaComponent {
  form : FormGroup;

  // Catálogo de tipos
  typeOptions: string[] = ['DESPLIEGUE', 'ACCESO', 'CAMBIO_TECNICO', 'OTRO'];

  tituloValue : string = '';
  descripcionValue : string = '';
  approverValue  : string = '';
  typeValue  : string = '';
  public newRequest: approvalRequests = {
                                      title:"",
                                      requester: "user",
                                      description:"",
                                      approver:"",
                                      type:"",
                                      currentState:"PENDING"
                                     }

  constructor(private service : ApprovalRequestService, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo : ['', Validators.required],
      descripcion : ['', Validators.required],
      approver : ['', Validators.required],
      type : ['', Validators.required]
    });
  }
  
  save(){
    if (this.form.invalid) return;

    const formValues = this.form.value;

    this.newRequest.title = formValues.titulo;
    this.newRequest.description = formValues.descripcion;
    this.newRequest.approver = formValues.approver;
    this.newRequest.type = formValues.type;
    this.newRequest.requester = localStorage.getItem('user') || "";
    this.newRequest.currentState = "PENDING";
    this.service.save(this.newRequest);
  }

}
