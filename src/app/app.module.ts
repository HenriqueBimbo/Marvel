import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { AdressComponent } from './adress/adress.component';
import { NgxMaskModule } from 'ngx-mask';
import {HttpClientModule} from '@angular/common/http'
import {FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PagamentoComponent,
    AdressComponent,
    HomeComponent,
    ProfileComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatCardModule , 
    RouterModule , 
    NgxMaskModule.forRoot()  , 
    HttpClientModule ,
    FormsModule , 
    MatFormFieldModule , 
    MatIconModule , 
    ReactiveFormsModule 
    
  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
