import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-id-picker',
  templateUrl: './id-picker.component.html',
  styleUrls: ['./id-picker.component.css']
})
export class IdPickerComponent {
  
  value = '';

  @Output() id_elegido = new EventEmitter<number>;

  confirmId(idSeleccionado : number){
    console.log(idSeleccionado);
    this.id_elegido.emit(idSeleccionado);
    console.log(idSeleccionado)
  }
  
}
