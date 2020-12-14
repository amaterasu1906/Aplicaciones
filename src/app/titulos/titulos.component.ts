import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre:string = "Misaki";

  imagenKokomi:string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ca23117-ff19-4fb7-8731-5a33dafa4af2/dcrhmrm-42b9f4f8-cbc7-4dbd-be66-617a49ccd4ff.jpg/v1/fit/w_300,h_900,q_70,strp/teruhashi_kokomi_by_mi_nt_dcrhmrm-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDEyIiwicGF0aCI6IlwvZlwvMGNhMjMxMTctZmYxOS00ZmI3LTg3MzEtNWEzM2RhZmE0YWYyXC9kY3JobXJtLTQyYjlmNGY4LWNiYzctNGRiZC1iZTY2LTYxN2E0OWNjZDRmZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LLlgXlazV3CtdyxBA0FIDEvAlMnCZLnjTdfVilwmJho";
  imagenMisaki:string = "https://swall.teahub.io/photos/small/331-3313273_hiro-fujiwara-j-kaichou-wa-maid-sama-misaki.jpg";
  
  dataInput:string = "";

  email:string="";
  password:string="";
  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.email + " - " + this.password)
  }
  hablar(){
    console.log("Mi nombre es: " + this.nombre)
  }
  mostrarCambios(){
    console.log("XD: " + this.password)
  }

  escribir(evento:any){
    console.log(evento.target.value);
  }
  cambiarFondo(evento:any){
    evento.srcElement.style.background = "gray";
  }
}
