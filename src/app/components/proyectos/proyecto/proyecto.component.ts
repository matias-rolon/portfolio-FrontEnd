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
  @Input() link:string = "";
  @Input() titulo:string = "";
  @Input() fecha:string ="";
  @Input() descripcion:string="";

}
