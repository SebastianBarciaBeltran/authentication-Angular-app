// Angular imports
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Module inner imports
// Third-party libraries imports
import { Subject, takeUntil } from 'rxjs';
// Services
import { AuthService } from '@core/services/auth.service';
import { CustomValidatorsService } from '@shared/services';
import { ReactiveFormService } from '@shared/services/reactive-forms.service';
// Components
// Standalone components
// Interfaces
// Others

@Component({
  selector: 'alicunde-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  loginForm!: FormGroup;

  errorMessage: string = '';

  constructor(
    private _fb: FormBuilder,
    private _validatorsService: CustomValidatorsService,
    private _authService: AuthService,
    private _reactiveFormService: ReactiveFormService
  ) {}

  get reactiveFormService() {
    return this._reactiveFormService;
  }

  ngOnInit(): void {
    this.errorMessage = '';
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this._fb.group({
      email: [
        'testoffline@alicunde.com',
        [
          Validators.required,
          Validators.pattern(this._validatorsService.email),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      ],
    });
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const { value } = this.loginForm;

      this._authService
        .authenticateUser(value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (_) => {},
          error: (error) => {
            console.error('error: ', error);
            this.errorMessage = error.message;
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
