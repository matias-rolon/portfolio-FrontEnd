import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  private apiServerUrl = "https://back-endap-4k2c.onrender.com";

  constructor(private http: HttpClient) { }

  public getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }

  public updateUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`,usuario);
  }
}
