import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() img:string = "";
  @Input() titulo:string = "";
  @Input() fechaInicio:string ="";
  @Input() fechaFin:string ="";
  @Input() descripcion:string="";

}
