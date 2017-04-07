import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    
    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ) : boolean | Observable<boolean> {

        console.log("dentro da rota filha");

/*        if (state.url.includes('editar')) {
            alert('Usuário sem acesso!');
            return false;
        }*/
        
        return true;
    }



}