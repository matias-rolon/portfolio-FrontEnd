import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/models/loginUser';
import { LoginUserService } from 'src/app/services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmit = false;  
  public valido = false
  public mostrarError = false
  public usuario:loginUser | undefined;
  public loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  constructor(private user : LoginUserService, private router:Router, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getUser();    
  }

  public getUser():void{
    this.user.getLoginUser().subscribe({
      next:(response:loginUser) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  onSubmit() {
    this.formSubmit = true;
    if(this.usuario?.email==this.loginForm.value.email && this.usuario?.password == this.loginForm.value.password){
      this.router.navigate(['/portfolio']);
    }
    else if(this.valido){
      this.mostrarError=true;
      console.log("Invalido");
    }
  }

  campovalido(campo : string){
    if(this.loginForm.get(campo)?.valid || !this.formSubmit){
      this.valido=true;
      return true;
    }
    else{
      this.valido = false;
      return false;
    }
  }
}
