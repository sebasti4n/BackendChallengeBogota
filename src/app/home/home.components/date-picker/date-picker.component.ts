import { HttpParams } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
    
  @Output() fecha_elegida = new EventEmitter<string>;

  myForm: FormGroup;

  constructor( private formBuilder: FormBuilder){
    this.myForm = this.formBuilder.group({
      date: ['', Validators.required]
    });
  }

  confirmDate(fechaSeleccionada : any){
    if (this.myForm.valid){
      console.log(fechaSeleccionada);
      this.fecha_elegida.emit(fechaSeleccionada);
    }
  }
}
