import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginUser } from '../models/loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  valido = false;
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getLoginUser():Observable<loginUser>{
    return this.http.get<loginUser>(`${this.apiServerUrl}/loginUser/id/1`);
  }
}
