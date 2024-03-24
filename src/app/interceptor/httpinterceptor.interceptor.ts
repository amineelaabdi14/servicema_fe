import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, catchError, switchMap } from 'rxjs';
import { refreshTokenResponse } from '../dtos/response/RefreshToken.response';
import { AuthServiceService } from '../services/auth/auth-service.service';

export const httpinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes('login') && !req.url.includes('register')) {
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`,
      ),
    });
  }
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      console.log('error', error);
      if (error.status === 401) {
        return getNewToken().pipe(
          switchMap((authData) => {
            if (!authData) {
              router.navigate(['/auth/login']);
              return EMPTY;
            }
            localStorage.setItem('token', authData.token);
            localStorage.setItem('refresh', authData.refreshToken);
            req = req.clone({
              headers: req.headers.set(
                'Authorization',
                `Bearer ${authData.token}`,
              ),
            });

            return next(req);
          }), 
        );
      }
      throw error;
    }),
  );
  function getNewToken(): Observable<refreshTokenResponse> {
    const auth = inject(AuthServiceService);
    return auth.refresh(localStorage.getItem('refresh')!);
  }
};
