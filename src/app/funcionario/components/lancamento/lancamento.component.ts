import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tipo } from 'src/app/shared/models/tipo.enum';

import * as moment from 'moment';

declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataAtual    = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtualEn  = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoLancamento();
  }

  obterGeoLocation(): string {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => 
          this.geoLocation = `${position.coords.latitude},${position.coords.longitude}`);
    }
    return '';
  }

  iniciarTrabalho() {
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho() {
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  inciarAlmoço() {
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco() {
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  obterUltimoLancamento() {
    this.ultimoTipoLancado = '';
  }

  cadastrar(tipo: Tipo) {
    alert(`Tipo: ${tipo}, dataAtualEn: ${this.dataAtualEn},
      geolocation: ${this.geoLocation}`);
  }

  obterUrlMapa(): string {
    return "https://www.google.com/maps/search/?api=1&query=" +
      this.geoLocation;
  }

  exibirInicioTrabalho(): boolean {
    return this.ultimoTipoLancado == '' ||
      this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }

  exibirTerminoTrabalho(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO ||
      this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoço(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoço(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_ALMOCO;
  }
}
