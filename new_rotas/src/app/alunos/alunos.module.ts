import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent }   from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [
        AlunosService,
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ],
})
export class AlunosModule { }
