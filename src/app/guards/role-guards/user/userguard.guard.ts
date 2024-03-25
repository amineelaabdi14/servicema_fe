import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserstateService } from '../../../state/userstate.service';
import { UserService } from '../../../services/user/user.service';

export const userguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(localStorage.getItem("role") != 'USER'){
    router.navigate(['/home']);
    return false;
  }
  return true;};
