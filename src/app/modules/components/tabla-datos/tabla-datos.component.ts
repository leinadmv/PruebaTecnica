import { AfterViewInit, Component, Input,  OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultaService } from 'src/app/services/consulta.service';
import { CrearUsuarioComponent } from '../../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource();
  displayedColumns:string[] = ['usuario','email','nombres','apellidos','activo','acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private dialog:MatDialog, private consultaService: ConsultaService) { }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel="Registros por página";
  }

  ngOnInit(): void {
    this.dataSource.data = this.consultaService.get();
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

  filtro(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
