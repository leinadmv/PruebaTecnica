import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {


  formUser: any;
  disable:boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formControl();

    this.setData(this.data.data);

  }


  formControl(){

    this.formUser = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [ Validators.email, Validators.required]),
      usuario: new FormControl('', [ Validators.maxLength(20), Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      estado: new FormControl('', [ Validators.required]),
    });

  }

  get error(): any { return this.formUser.controls; }

  guardar(form: any){

  }

  setData(data: any){

      this.formUser.controls.nombre.setValue(data.nombres);
      this.formUser.controls.apellido.setValue(data.apellidos);
      this.formUser.controls.email.setValue(data.email);
      this.formUser.controls.usuario.setValue(data.usuario);
      this.formUser.controls.estado.setValue(data.activo);

    if(this.data.type === 'ver'){
      
      this.disable = true;

    } else if(this.data.type === 'editar') {

      this.disable = false;
    }

  }

}
