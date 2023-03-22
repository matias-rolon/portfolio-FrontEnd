import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getSkill():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills/all`);
  }
  
  public addSkill(skill:Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/skills/add`, skill);
  }

  public updateSkill(skill:Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/skills/update`, skill);
  }

  public deleteSkill(skillId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skills/delete/${skillId}`)
  }
}
