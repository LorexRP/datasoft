import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponent/app.component';

//librerias para consumir el servicio
import {HttpModule, } from '@angular/http';
import {HttpClientModule, } from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes

import {ContactosComponent } from './contactos/contactos.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetallesproductosComponent } from './detallesproductos/detallesproductos.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { EncargadosComponent } from './encargados/encargados.component';

//Servicios
import { CatalogosService } from './catalogos.service';

//Rutas
const appRoutes: Routes =
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Inicio'
  },
  {
    path: 'Inicio',
    component: MenuInicioComponent,
  },
  {
    path: 'Catalogos',
    component: CatalogosComponent,
  },
  {
    path: 'Contactos',
    component: ContactosComponent,
  },
  {
    path: 'DetallesProductos',
    component: DetallesproductosComponent,
  },
  {
    path: 'Encargados',
    component: EncargadosComponent,
  },
  {
    path: 'Materiales',
    component: MaterialesComponent,
  },
  {
    path: 'Produccion',
    component: ProduccionComponent,
  },
  {
    path: 'Productos',
    component: ProductosComponent,
  }
  /*++++++++++++++++++++++++++++++++++++++++++++
    Se incluye esto y la coma despues del corchete anterior
  */
]

@NgModule({
  declarations: [
    AppComponent,
    CatalogosComponent,
    ContactosComponent,
    ProduccionComponent,
    MenuInicioComponent,
    ProductosComponent,
    DetallesproductosComponent,
    MaterialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 

  ],
  providers: [ CatalogosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
