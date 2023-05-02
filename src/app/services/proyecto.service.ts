import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from "../models/proyecto";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl="https://back-endap-4k2c.onrender.com";

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/proyectos/all`);
  }

  public addProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServerUrl}/proyectos/add`, proyecto);
  }

  public updateProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServerUrl}/proyectos/update`, proyecto);
  }

  public deleteProyecto(proyectoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/proyectos/delete/${proyectoId}`);
  }
}
