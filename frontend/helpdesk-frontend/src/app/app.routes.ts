 import { Routes } from '@angular/router';

import {Login } from './pages/login/login';
import {Register } from './pages/register/register';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import {Dashboard } from './pages/dashboard/dashboard';
import {CreateTicket } from './pages/create-ticket/create-ticket';
import {TicketList} from './pages/ticket-list/ticket-list';
import { Profile } from './pages/profile/profile';
import { authGuard } from './auth-guard';

export const routes: Routes = [

  // Public pages (No sidebar)

  {
    path: 'login',
    component: Login,
  },

  {
    path: 'register',
    component: Register
  },
  // Private pages (With sidebar)

  {
    path: '',
    component: DashboardLayout,

    children: [

      {
        path: 'dashboard',
        component: Dashboard,
        canActivate:[authGuard]
      },
      
      {
        path: 'profile',
        component: Profile,
        canActivate:[authGuard]
      },
      {
        path: 'tickets',
        component: TicketList,
        canActivate:[authGuard]
      },

      {
        path: 'create-ticket',
        component: CreateTicket,
        canActivate:[authGuard]
      },


    ]

  },

  // Default page
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'login'
  }

];