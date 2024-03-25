import { CanActivateFn, Router } from '@angular/router';
import { UserstateService } from '../../../state/userstate.service';
import { inject } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

export const sellerguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(localStorage.getItem("role") != 'SELLER'){
    router.navigate(['/home']);
    return false;
  }
  return true;
};
