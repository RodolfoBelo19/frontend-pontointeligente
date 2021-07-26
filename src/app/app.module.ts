import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginModule } from './autenticacao/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/components/cadastro-pj-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    RouterModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
