// Angular imports
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
// Third-party libraries imports
// Services
// Components
// Standalone components
// Interfaces
// Others
@Injectable()
export class CustomValidatorsService {
  public email: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}
}
