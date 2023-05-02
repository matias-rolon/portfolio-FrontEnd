import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser } from '../models/loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  valido = false;
  private apiServerUrl = "https://back-endap-4k2c.onrender.com";

  constructor(private http: HttpClient) { }

  public getLoginUser():Observable<loginUser>{
    return this.http.get<loginUser>(`${this.apiServerUrl}/loginUser/id/1`);
  }
}
