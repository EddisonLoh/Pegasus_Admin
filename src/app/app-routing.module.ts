import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { AuthGuard } from './guards/auth.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then( m => m.DriversPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'manage',
    loadChildren: () => import('./pages/manage/manage.module').then( m => m.ManagePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () => 
      import('./pages/profile/profile.module').then( (m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'details',
    loadChildren: () => 
      import('./pages/details/details.module').then(m => m.DetailsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'network',
    loadChildren: () => import('./pages/network/network.module').then( m => m.NetworkPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'cartypes',
    loadChildren: () => import('./pages/cartypes/cartypes.module').then( m => m.CartypesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'prices',
    loadChildren: () => import('./pages/prices/prices.module').then( m => m.PricesPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'payout',
    loadChildren: () => import('./pages/payout/payout.module').then( m => m.PayoutPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'rider-app',
    loadChildren: () => import('./pages/rider-app/rider-app.module').then( m => m.RiderAppPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'driver-app',
    loadChildren: () => import('./pages/driver-app/driver-app.module').then( m => m.DriverAppPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
