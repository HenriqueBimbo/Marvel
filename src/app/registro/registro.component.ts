
import { Component,  OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Input } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

formGroupCadastro: FormGroup 
 @Input() submit = "" ;
  
  
  
  nome = '';
  nickname = '';
  last = '';
  email = '';
  contato = '';
 

 


  constructor(private router:Router , private formBuilder: FormBuilder) { 
   
    this.formGroupCadastro = new FormGroup({
      nickname: new FormControl (null , Validators.required) ,
      nome: new FormControl (null , Validators.required), 
      last: new FormControl(null , Validators.required) , 
      email: new FormControl (null , Validators.required), 
      contato: new FormControl (null , Validators.required) , 
      senha: new FormControl (null, Validators.required)

      
    })
  }

  hide = true;
  pass = "password";
  typePass = "password";




 
  

  ngOnInit() { 
  
  }

  login() {

    this.router.navigate(['login'])

  }



  verSenha() {
    if(this.pass == 'visibility') {
  
  
  
    this.pass = 'visibility_off';
    this.typePass = 'text'
  
  
      }else{
        this.pass='visibility';
        this.typePass = 'password'
      }
    }




    continuar(){

      console.log('nickname', this.formGroupCadastro.value);
      console.log(this.formGroupCadastro.value.senha)
      console.log(this.formGroupCadastro.value.contato)
      console.log(this.formGroupCadastro.value.email)
      console.log(this.formGroupCadastro.value.nome)
      // debugger

      
        
        const nickname = this.formGroupCadastro.controls.nickname.validator
        const nome = this.formGroupCadastro.controls.nome.value
        const last = this.formGroupCadastro.controls.last.value
        const email = this.formGroupCadastro.controls.email.value
        const contato = this.formGroupCadastro.controls.contato.value
        const senha = this.formGroupCadastro.controls.senha.value

      
        localStorage.setItem("nome" , this.nome)
        localStorage.setItem("nickname", this.nickname)
        localStorage.setItem("last" , this.last)
        localStorage.setItem("email" , this.email)
        localStorage.setItem("contato" , this.contato)

       
        
       

          this.router.navigate(['pagamento'])
        

       


        
   
        
        
      }
      

  



     

    
      
    }
    
   
    
    

