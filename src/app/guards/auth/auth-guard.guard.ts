import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserstateService } from '../../state/userstate.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const nav = inject(Router);
  const user = inject(UserstateService);
  if(user.getUser() == null){
    nav.navigate(['/auth/login']);
    return false;
  }
  return true;
};
