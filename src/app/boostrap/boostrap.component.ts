import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre:string;
  apellido:string;
  promedio:number;
  constructor(){
    this.nombre = "";
    this.apellido = "";
    this.promedio = 0;
  }
}

@Component({
  selector: 'app-boostrap',
  templateUrl: './boostrap.component.html',
  styleUrls: ['./boostrap.component.scss']
})
export class BoostrapComponent implements OnInit {
  alumno: Alumno = new Alumno();
  listaAlumnos: Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listaAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      promedio: this.alumno.promedio
    });
    this.alumno.nombre = "";
    this.alumno.apellido = "";
    this.alumno.promedio = 0;

    console.log(this.listaAlumnos);
  }

}
