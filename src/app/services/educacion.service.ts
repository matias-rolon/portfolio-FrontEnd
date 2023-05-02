import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl="https://back-endap-4k2c.onrender.com";

  constructor(private http:HttpClient) { }

  public getEducation():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educaciones/all`);
  }

  public addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educaciones/add`, educacion);
  }

  public updateEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educaciones/update`, educacion);
  }

  public deleteEducacion(educacionId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educaciones/delete/${educacionId}`);
  }
}
