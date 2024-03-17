// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Module inner imports
// Third-party libraries imports
// Services
// Components
import { DashboardComponent } from './dashboard.component';
import { SuccessComponent } from './views/success/success.component';
// Standalone components
// Interfaces
// Others

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'success',
      },
      {
        path: 'success',
        component: SuccessComponent,
      },
      {
        path: '**',
        redirectTo: 'success',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
