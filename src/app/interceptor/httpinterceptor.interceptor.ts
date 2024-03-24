import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, catchError, switchMap } from 'rxjs';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { RefreshTokenResponse } from '../dtos/response/RefreshToken.response';

export const httpinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if(
    ( req.method=="GET"&&req.url.includes('categories') ) || 
    req.url.includes('login') || 
    req.url.includes('register') ||
    req.url.includes('refresh')||
    ( req.method=="GET"&&req.url.includes('services') )    )
    {    
    return next(req);
  }
   
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`,
      ),
    });
  // const router = inject(Router);
  // return next(req).pipe(
  //   catchError((error) => {
  //     console.log('error', error);
  //     if (error.status === 401) {
  //       return getNewToken().pipe(
  //         switchMap((authData) => {
  //           if (!authData) {
  //             router.navigate(['/auth/login']);
  //             return EMPTY;
  //           }
  //           localStorage.setItem('token', authData.token);
  //           localStorage.setItem('refreshToken', authData.refreshToken);
  //           req = req.clone({
  //             headers: req.headers.set(
  //               'Authorization',
  //               `Bearer ${authData.token}`,
  //             ),
  //           });

  //           return next(req);
  //         }), 
  //       );
  //     }
  //     throw error;
  //   }),
  // );
  return next(req);

  function getNewToken(): Observable<RefreshTokenResponse> {
    const auth = inject(AuthServiceService);
    return auth.refresh(localStorage.getItem('refreshToken')!);
  }
};