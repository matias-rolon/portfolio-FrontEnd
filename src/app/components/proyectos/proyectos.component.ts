import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { LoginUserService } from 'src/app/services/login-user.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  valido:boolean | undefined;
  public proyectos:Proyecto[]=[];
  public editProyecto:Proyecto | undefined;
  public deleteProyecto:Proyecto | undefined;

  constructor(private proyectoService:ProyectoService, private loginUser:LoginUserService) { }

  ngOnInit(): void {
    this.getProyecto();
    this.valido = this.loginUser.valido;
  }

  public getProyecto():void{
    this.proyectoService.getProyecto().subscribe({
      next:(Response: Proyecto[]) =>{
        this.proyectos=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, proyecto?:Proyecto):void{
    const container=document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addProyectoModal');
    }
    else if(mode === 'delete'){
      this.deleteProyecto=proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    }
    else if(mode === 'edit'){
      this.editProyecto=proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddProyecto(addForm:NgForm){
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.addProyecto(addForm.value).subscribe({
      next: (response:Proyecto) =>{
        console.log(response);
        this.getProyecto();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateProyecto(proyecto:Proyecto){
    this.editProyecto=proyecto;
    document.getElementById('update-proyecto-form')?.click();
    this.proyectoService.updateProyecto(proyecto).subscribe({
      next: (response:Proyecto) =>{
        console.log(response);
        this.getProyecto();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteProyecto(idPro:number):void{
    this.proyectoService.deleteProyecto(idPro).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.getProyecto();
      },
      error:(erorr:HttpErrorResponse)=>{
        alert(erorr.message);
      }
    })
  }

}
