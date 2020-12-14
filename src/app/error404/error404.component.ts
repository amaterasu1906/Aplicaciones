import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  imagen:string="https://marivilastra.com/wp-content/uploads/2019/04/marivi-lastra-que-es-un-error-404.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
