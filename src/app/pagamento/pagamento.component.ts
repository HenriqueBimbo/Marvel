import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaskApplierService, MaskDirective, MaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  numcartao = '';
  validade = '';
  namecartao = '';

  constructor(private router:Router) { }

 
  ngOnInit(): void {
    console.log(localStorage.getItem("namecartao"))
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
  
  continuar() {

    localStorage.setItem("numcartao" , this.numcartao)
    localStorage.setItem("namecartao" , this.namecartao)
    localStorage.setItem("validade" , this.validade)
    this.router.navigate(['adress'])
    

  }
}
