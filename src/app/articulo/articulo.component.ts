import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre:'Monitor Dell 27X',
        descripcion:'Monitor de 27" con 144HZ',
        precio:3600,
        stock:10,
        precioMayoreo:3500
      },
      {
        nombre:'CPU Ryzen 5',
        descripcion:'Cpu con procesador Ryzen 5 primera generacion',
        precio:3400,
        stock:11,
        precioMayoreo:3000
      },
      {
        nombre:'M.2 Nvme Samsung Evo 970 PRO',
        descripcion:'Capacidad de 256GB, lectura de 3500 mb/seg, write: 2100 mb/seg',
        precio:1900,
        stock:3,
        precioMayoreo:3350
      }
    );
  }

  pasarParametro(articuloRecibido:Articulo){
    this.ruta.navigate(['articuloDetalle', {articulo:JSON.stringify(articuloRecibido)}])
  }
}
