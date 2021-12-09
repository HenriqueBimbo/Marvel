import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage
   }
}
