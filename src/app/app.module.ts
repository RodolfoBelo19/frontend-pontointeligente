import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginModule } from './autenticacao/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/components/cadastro-pj-routing.module';
import { RouterModule } from '@angular/router';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { CadastroPfRoutingModule } from './autenticacao/cadastro-pf/cadastro-pf-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPfModule,
    CadastroPjRoutingModule,
    CadastroPfRoutingModule,
    MatTooltipModule,
    MatIconModule,
    RouterModule,
    FlexLayoutModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
