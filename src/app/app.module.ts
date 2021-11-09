import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearUsuarioComponent } from './modules/crear-usuario/crear-usuario.component';
import { TablaDatosComponent } from './modules/components/tabla-datos/tabla-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearUsuarioComponent,
    TablaDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
