import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../shared/empleado.service';
import {Empleado} from '../shared/empleado.model';
@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {
  empleadolista :Empleado[];
  constructor(private empleadoService :EmpleadoService) { }

  ngOnInit() {
   var x= this.empleadoService.getData();
   x.snapshotChanges().subscribe(item =>{
    this.empleadolista=[];
    item.forEach(element =>{
      var y= element.payload.toJSON();
      y["$key"]=element.key;
      this.empleadolista.push(y as Empleado);
    });
   });

  }
onItemClick(emp : Empleado){
  this.empleadoService.EmpleadoSelectionado= Object.assign({},emp);
}
}
