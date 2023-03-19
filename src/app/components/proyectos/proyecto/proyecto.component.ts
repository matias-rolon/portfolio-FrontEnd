import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imagen:string = "";
  @Input() url:string = "";
  @Input() titulo:string = "";
  @Input() fechaInicio:string ="";
  @Input() fechaFin:string ="";
  @Input() descripcion:string="";

}
