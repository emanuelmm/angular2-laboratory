import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { AuthService } from './../login/auth.service';
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot 
  ): boolean | Observable<boolean> {
    return this.verificarAcesso();
  }
  
  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }
  
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: verificando se usu')
    return this.verificarAcesso();
  }


}
