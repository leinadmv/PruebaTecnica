import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  usuarios = [
    {id:1,usuario:'user_prueba',email:'corre23o@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'activo'},
    {id:2,usuario:'user_prueba2',email:'corre144o@prueba.com',nombres:'Andres',apellidos:'Martinez',activo:'activo'},
    {id:3,usuario:'user_prueba3',email:'corre6o@prueba.com',nombres:'Camilo',apellidos:'Cabrera',activo:'activo'},
    {id:4,usuario:'user_prueba4',email:'corre55o@prueba.com',nombres:'Camilo',apellidos:'Caldas',activo:'activo'},
    {id:5,usuario:'user_prueba5',email:'correo@prueba.com',nombres:'Sebastian',apellidos:'Vargas',activo:'activo'},
    {id:6,usuario:'user_prueba6',email:'corr44eo@prueba.com',nombres:'Contratenme',apellidos:'Silva',activo:'activo'},
    {id:7,usuario:'user_prueba7',email:'corre9o@prueba.com',nombres:'Daniel',apellidos:'Giraldo',activo:'activo'},
    {id:8,usuario:'user_prueba8',email:'corre99o@prueba.com',nombres:'Buena prueba',apellidos:'Limas',activo:'activo'},
    {id:9,usuario:'user_prueba9',email:'corre77o@prueba.com',nombres:'Hender',apellidos:'Quintero',activo:'activo'},
    {id:10,usuario:'user_prueba10',email:'correo9@prueba.com',nombres:'Laura',apellidos:'Lasso',activo:'activo'},
    {id:11,usuario:'user_prueba11',email:'corr88eo@prueba.com',nombres:'Camila',apellidos:'Hernandez',activo:'activo'},
    {id:12,usuario:'user_prueba12',email:'corre44o@prueba.com',nombres:'Angelica',apellidos:'Vargas',activo:'activo'},
    {id:13,usuario:'user_prueba13',email:'corre44o2@prueba.com',nombres:'Maria',apellidos:'Perez',activo:'activo'},
    {id:14,usuario:'user_prueba14',email:'corre35o@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'activo'},
    {id:15,usuario:'user_prueba15',email:'corre3o@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'activo'},
    {id:16,usuario:'user_prueba16',email:'corre44o@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'activo'},
  ];

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  handleError(error:HttpErrorResponse){
    return throwError(error);
  }

  get(){
    return this.usuarios;
  }

}
