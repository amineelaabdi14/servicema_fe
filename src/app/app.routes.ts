import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout/auth-layout.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppContentComponent } from './layouts/app-content/app-content.component';
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard-layout/dashboard-layout.component';
import { authGuardGuard } from './guards/auth/auth-guard.guard';

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
      {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        canActivate: [authGuardGuard],
        children: [
              {
                path: 'profile',
                loadComponent: () => import('./pages/profile-page/profile-page.component').then(m => m.ProfilePageComponent)
              },
        ],
      },
];
