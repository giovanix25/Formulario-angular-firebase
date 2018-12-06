import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import{EmpleadoService} from '../shared/empleado.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService :EmpleadoService) { }

  ngOnInit() {
  this.resetForm();
  }
  onSubmit(form: NgForm){
    if(form.value.$key==null)
    this.empleadoService.insertEmpleado(form.value);
    else 
    this.empleadoService.updateEmpleado(form.value);
    this.resetForm(form);
  }
resetForm(form? : NgForm){
  if(form != null)
  form.reset();
  this.empleadoService.EmpleadoSelectionado={
  $key :null,
  nombre: '',
  position: '',
  office: '',
  salary: 0,
}
}
onDelete(form :NgForm){
if(confirm('Estas seguro que deceas eliminar este elemento?')==true){
  this.empleadoService.deleteEmpleado(form.value.$key);
  this.resetForm(form);
}
}
}
