import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nickname = localStorage.getItem("nickname")
  
  nome = localStorage.getItem("nome")

  last = localStorage.getItem("last")

  email = localStorage.getItem("email")

  contato = localStorage.getItem("contato")

  adress = localStorage.getItem("adress")

  number = localStorage.getItem("number")

 complement = localStorage.getItem("complement")

 localidade = localStorage.getItem("localidade")

 namecartao = localStorage.getItem("namecartao")

  validade = localStorage.getItem("validade")

  numcartao = localStorage.getItem("numcartao")

uf = localStorage.getItem("uf")
 cep = localStorage.getItem("cep")

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("nickname"))
    console.log(localStorage.getItem("nome"))
    console.log(localStorage.getItem("last"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("contato"))
    console.log(localStorage.getItem("adress"))
   
  }

  logout() {

    this.router.navigate(['login'])


  }

  home() {

    this.router.navigate(['home'])
  }

}
