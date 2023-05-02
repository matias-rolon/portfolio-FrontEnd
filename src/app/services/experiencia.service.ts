import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from "../models/experiencia";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl = "https://back-endap-4k2c.onrender.com";

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencias/all`);
  }

  public addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencias/add`, experiencia);
  }

  public updateExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencias/update`, experiencia);
  }

  public deleteExperiencia(experienciaId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencias/delete/${experienciaId}`);
  }
}
