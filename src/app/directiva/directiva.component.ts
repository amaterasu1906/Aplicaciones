import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVencimiento: Date;
}
@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  imagenLoader:string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmMxMTA0NTQtNWIzMy00NDE2LWJmOWItNzI5OTJjN2NiNTZmXC9kNjBlYjF2LTc5MjEyNjI0LWU4NDItNGU1NS04ZDU4LTRhYzc1MTRjYThlNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.P1AQAZ6H1E-Xwu69xiwDXqfZ5h47ZZlXS4u86T6l8nk";
  loading:boolean = true;
  nombres: Array<string> = ["Kokomi", "Misaki", "Megumin"];
  pestana:string="";
  productos: Array<Producto> = [
    {
      nombre: "Pepsi",
      stock: 75,
      fabricante: "Pepsi Cola",
      fechaVencimiento:  new Date("01/12/2023")
    },
    {
      nombre: "Cacahuates Salados",
      stock: 52,
      fabricante: "Japan Sa De SV",
      fechaVencimiento:  new Date("23/12/2022")
    },
    {
      nombre: "CornFlace",
      stock: 13,
      fabricante: "Sabritas",
      fechaVencimiento:  new Date("01/12/2023")
    }
  ]

  constructor() { 
    setTimeout(() =>{
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
  }

  alternar(){
    this.loading = !this.loading;
  }

  cambiarPestana(pestana:string){
    this.pestana = pestana;
  }
}
