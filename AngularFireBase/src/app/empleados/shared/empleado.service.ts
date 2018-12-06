import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import {Empleado} from './empleado.model';
@Injectable()
export class EmpleadoService {
  empleadoLista : AngularFireList<any>;
EmpleadoSelectionado : Empleado= new Empleado();
  constructor(private firebase : AngularFireDatabase) { }
getData(){
  this.empleadoLista= this.firebase.list('empleados');
  return this.empleadoLista;
}

insertEmpleado(employee :Empleado){
this.empleadoLista.push({
  nombre :employee.nombre,
  position:employee.position,
  office: employee.office,
  salary: employee.salary
});
}
updateEmpleado(emp :Empleado){
  this.empleadoLista.update(emp.$key,{
  nombre: emp.nombre,
  position: emp.position,
  office: emp.office,
  salary: emp.salary
  })
}

deleteEmpleado(key :string){
this.empleadoLista.remove(key);
}
}
