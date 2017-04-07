import { AlunosService } from './../alunos.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Aluno } from "app/alunos/alunos";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) {}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            let id = route.params['id'];
            return this.alunosService.getAluno(id);
    }
}