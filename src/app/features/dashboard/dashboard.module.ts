// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module inner imports
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
// Third-party libraries imports
// Services
// Components
import { DashboardComponent } from './dashboard.component';
import { SuccessComponent } from './views/success/success.component';
// Standalone components
// Interfaces
// Others

@NgModule({
  declarations: [DashboardComponent, SuccessComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    //? Standalone components
  ],
})
export class DashboardModule {}
