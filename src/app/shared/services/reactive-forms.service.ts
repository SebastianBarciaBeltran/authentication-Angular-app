// Angular imports
import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
// Interfaces import

@Injectable()
export class ReactiveFormService {
  get required(): string {
    return 'Campo obligatorio';
  }

  get passwordLength(): string {
    return 'La contraseña debe contener 9 caracters';
  }

  get invalidEmail(): string {
    return 'El email es inválido';
  }

  /**
   * @param form
   * @param key is the formControlName
   * @returns is invalid or not
   */
  invalidInput(
    form: FormGroup | AbstractControl<any, any>,
    key: string
  ): boolean | undefined {
    return form.get(key)?.invalid && form.get(key)?.touched;
  }

  /**
   *
   * @param form
   * @param key is the formControlName
   * @returns the value of the property needs.
   */
  getInputValue(form: FormGroup | AbstractControl<any, any>, key: string): any {
    return form.get(key)?.value;
  }

  /**
   * Message depends validators
   * @param form
   * @param key is the formControlName
   * @returns the message error that the property have
   */
  validatorsMessages(
    form: FormGroup | AbstractControl<any, any>,
    key: string
  ): string {
    const errors = form.get(key)?.errors;

    if (errors) {
      if (errors['required']) {
        return this.required;
      }

      if (errors['minlength'] || errors['maxlength']) {
        return this.passwordLength;
      }

      if (errors['pattern']) {
        return this.invalidEmail;
      }
    }

    return '';
  }
}
