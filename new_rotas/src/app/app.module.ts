import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AlunosModule } from './alunos/alunos.module';
import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos/alunos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlunoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    MaterializeModule,
    AppRoutingModule,
    AlunosModule
  ],
  providers: [AlunosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
