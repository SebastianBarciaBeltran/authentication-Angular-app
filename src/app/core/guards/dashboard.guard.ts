// Angular imports
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
// Module inner imports
// Third-party libraries imports
// Services
import { AuthService } from '@core/services';
// Components
// Standalone components
// Interfaces
// Others
export const dashboardGuard: CanActivateFn = (route, state) => {

  const _authService = inject(AuthService);
  const _router = inject(Router);

  if (_authService.isAuthenticated()) {
    return true;
  } else {
    _router.navigate(['auth/login']);

    return false;
  }
};
