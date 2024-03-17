// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module inner imports
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
// Third-party libraries imports
// Services
// Components
import { LoginComponent } from './views/login/login.component';
// Standalone components
// Interfaces
// Others

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
