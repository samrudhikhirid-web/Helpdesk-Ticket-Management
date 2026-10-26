 import { Routes } from '@angular/router';

import {Login } from './pages/login/login';
import {Register } from './pages/register/register';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import {Dashboard } from './pages/dashboard/dashboard';
import {CreateTicket } from './pages/create-ticket/create-ticket';
import {TicketList} from './pages/ticket-list/ticket-list';
import { Profile } from './pages/profile/profile';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { AdminTickets } from './pages/admin-tickets/admin-tickets';
import { Categories } from './pages/categories/categories';
import { authGuard } from './auth-guard';

export const routes: Routes = [

  // Default page first
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Public pages
  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },


  // Private pages
  {
    path: '',
    component: DashboardLayout,
    canActivate:[authGuard],
    children: [

      {
        path: 'dashboard',
        component: Dashboard,
     
      },

      {
        path: 'profile',
        component: Profile,
   
      },

      {
        path: 'tickets',
        component: TicketList,
       
      },

      {
        path: 'create-ticket',
        component: CreateTicket,
       
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboard,
        canActivate:[authGuard]
      },
      {
        path: 'admin-tickets',
        component:AdminTickets,
        canActivate:[authGuard]
      },
      {
        path:'categories',
        component:Categories,
        canActivate:[authGuard]
      }
    ]
  },
 
  {
    path:'**',
    redirectTo:'login'
  }

];