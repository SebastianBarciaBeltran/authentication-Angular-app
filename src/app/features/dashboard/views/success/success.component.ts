// Angular imports
import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
// Module inner imports
// Third-party libraries imports
// Services
// Components
// Standalone components
// Interfaces
// Others
@Component({
  selector: 'alicunde-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  constructor(private _authService: AuthService) {}

  logout(): void {
    this._authService.logout();
  }
}
