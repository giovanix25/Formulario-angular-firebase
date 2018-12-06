import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpleadoListaComponent } from './empleados/empleado-lista/empleado-lista.component';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoListaComponent
  ],
  imports: [
    BrowserModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
