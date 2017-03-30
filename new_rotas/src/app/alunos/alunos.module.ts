import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent }   from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
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
        AlunoFormComponent
    ],
    providers: [],
})
export class AlunosModule { }
