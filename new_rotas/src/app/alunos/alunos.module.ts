import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent }   from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent
    ],
    providers: [],
})
export class AlunosModule { }
