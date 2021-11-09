import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsultaService } from 'src/app/services/consulta.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(consulta : ConsultaService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  crearUsuario(){

    const dialogCrearUsuario = this.dialog.open(CrearUsuarioComponent, {
      width: '80%',
      data: {
        type: 'crear',
        title: 'Crear usuario',
      },
      panelClass: 'custom-dialog-container',
    });

  }

  filtro(){

  }

}
