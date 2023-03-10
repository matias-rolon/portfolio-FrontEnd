import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() img:string = "";
  @Input() titulo:string = "";
  @Input() fecha:string ="";
  @Input() descripcion:string="";


}
