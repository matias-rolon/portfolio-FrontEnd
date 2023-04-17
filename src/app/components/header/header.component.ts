import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginUserService } from 'src/app/services/login-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  valido: boolean | undefined;

  constructor(private router:Router, private loginUser:LoginUserService) { }
  ngOnInit(): void {
    this.valido = this.loginUser.valido;
  }

  login(){
    this.router.navigate(['/login'])
  }
  logout(){
    location.reload();
  }
}
