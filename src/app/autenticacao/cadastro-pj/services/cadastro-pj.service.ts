import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

import { CadastroPj } from '../models/cadastro-pj.model';

@Injectable()
export class CadastrarPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(`${env.baseApiUrl}/${this.PATH}`, cadastroPj);
  }

}
