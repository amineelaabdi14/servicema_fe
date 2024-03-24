import { ServicePageComponent } from './pages/service-page/service-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout/auth-layout.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppContentComponent } from './layouts/app-content/app-content.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        canActivate: [],
        children: [
              {
                path: 'login',
                loadComponent: () => import('./pages/auth/login-page/login-page.component').then(m => m.LoginPageComponent)
              },
              {
                path: 'register',
                loadComponent: () => import('./pages/auth/register-page/register-page.component').then(m => m.RegisterPageComponent)
              },
        ],
      },
      {
        path: '',
        component: AppContentComponent,
        canActivate: [],
        children: [
              {
                path: 'home',
                loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
              },
              {
                path: 'service/:id',
                loadComponent: () => import('./pages/service-page/service-page.component').then(m => m.ServicePageComponent)
              },
        ],
      },
];
