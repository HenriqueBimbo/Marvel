import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  hide = true;

  ngOnInit(): void {
  }

  pass = "password";
  typePass = "password";

  

  registrar() {

   this.router.navigate(['registro'])

  }

  entrar() {

    this.router.navigate(['home'])



  }


  usuario = {login: '' , senha: ''};

  public login(){

    console.log("Teste login: " + this.usuario.login + "senha : " + this.usuario.senha)

  }
}
