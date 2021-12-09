import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressComponent } from './adress/adress.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: '' , redirectTo:'login' , pathMatch: 'full'} ,
  {path: 'registro' , component: RegistroComponent} ,
  {path: 'login' , component: LoginComponent} ,
  {path: 'pagamento' , component: PagamentoComponent} ,
  {path: 'adress' , component: AdressComponent} , 
  {path: 'home' , component: HomeComponent} ,  
  {path: 'profile' , component: ProfileComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
