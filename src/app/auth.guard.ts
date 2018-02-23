import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatComponent } from './components/chat/chat.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin();
  }

  checkLogin() {
    if (this.authService.user) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<ChatComponent> {
  canDeactivate(component: ChatComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactive() || window.confirm('Are you sure?');
  }
}
