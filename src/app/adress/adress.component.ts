import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from '../cep.service';


@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  cep: string = '' ;

  adress: string = '' ;

  uf: string = '' ;

  localidade: string ='';

  number = '';

  complement = '';




  constructor(private router:Router , private cepService: CepService , ) { }
  

 
  
  consultaCep(f: any) {
  this.cepService.buscar(this.cep).subscribe((dados) => {
    this.populaForm(dados , f);
    console.log(dados)
  })

  }

  populaForm(dados: any , f: any) {

   this.adress = dados.body.logradouro
   this.uf = dados.body.uf
   this.localidade = dados.body.localidade
  

  }
  
  ngOnInit(): void {
  }

  pass = "password";
  typePass = "password";

  verSenha() {
  if(this.pass == 'visibility') {



  this.pass = 'visibility_off';
  this.typePass = 'text'


    }else{
      this.pass='visibility';
      this.typePass = 'password'
    }
  }

  login() {

   this.router.navigate(['login'])

  }
  
  finish() {
    localStorage.setItem("adress" , this.adress)
    localStorage.setItem("number" , this.number)
    localStorage.setItem("complement" , this.complement)
    localStorage.setItem("localidade" , this.localidade)
    localStorage.setItem("uf" , this.uf)
    localStorage.setItem("cep" , this.cep)
    this.router.navigate(['login'])


  }


}
