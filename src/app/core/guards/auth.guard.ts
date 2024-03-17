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
export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const _router = inject(Router);

  if (_authService.isAuthenticated()) {
    _router.navigate(['dashboard']);
    return false;
  } else {
    return true;
  }
};
