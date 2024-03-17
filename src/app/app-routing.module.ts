// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Module inner imports
// Third-party libraries imports
// Services
// Components
import { AppComponent } from './app.component';
// Standalone components
// Interfaces
// Others
import { authGuard, dashboardGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'auth',
        loadChildren: () =>
          import('@features/auth/auth.module').then((m) => m.AuthModule),
        canActivate: [authGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [dashboardGuard],
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
