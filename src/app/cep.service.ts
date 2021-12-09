import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpCliente: HttpClient) { }

  url = 'https://viacep.com.br/ws/input_cep/json/';

  buscar(cep:string) {
    return this.httpCliente.get(this.url.replace('input_cep', cep) , this.retornaHeader() );
  }
  retornaHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'response',
    };
    return httpOptions;
    
  }
}
