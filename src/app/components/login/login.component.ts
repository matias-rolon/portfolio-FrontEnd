import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmit = false;  
  public valido = false
  public mostrarError = false
  public usuario:Usuario | undefined;
  public loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  constructor(private user : SobreMiService, private router:Router, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getUser();    
  }

  public getUser():void{
    this.user.getUser().subscribe({
      next:(response:Usuario) =>{
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
