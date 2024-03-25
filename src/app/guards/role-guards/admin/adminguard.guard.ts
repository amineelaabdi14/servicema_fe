import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserstateService } from '../../../state/userstate.service';

export const adminguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(localStorage.getItem("role") != 'ADMIN'){
    router.navigate(['/home']);
    return false;
  }
  return true;};
