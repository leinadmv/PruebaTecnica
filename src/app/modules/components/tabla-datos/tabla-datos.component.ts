import { Component, Input,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from '../../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit {

  @Input() dataSource = [];
  displayedColumns:string[] = ['usuario','email','nombres','apellidos','activo','acciones'];
  length: any;
  pageSize = 5;
  page = 1;
  pageSizeOptions = [5,10,25,50,100];

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  pageEvent(event:any){
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
  }

  editar(dato: any){

    const dialogCrearUsuario = this.dialog.open(CrearUsuarioComponent, {
      width: '80%',
      data: {
        type: 'editar',
        title: 'Editar usuario',
        data: dato
      },
      panelClass: 'custom-dialog-container',
    });

  }

  ver(dato: any){

    const dialogCrearUsuario = this.dialog.open(CrearUsuarioComponent, {
      width: '80%',
      data: {
        type: 'ver',
        title: 'Ver usuario',
        data: dato
      },
      panelClass: 'custom-dialog-container',
    });

  }

}
