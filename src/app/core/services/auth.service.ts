// Angular imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Module inner imports
// Third-party libraries imports
import { Observable, catchError, of, tap, throwError } from 'rxjs';
// Services
// Components
// Standalone components
// Interfaces
import { IUser, LoginForm } from '@shared/interfaces';
import { loginDataMock } from 'src/mocks/login-data.mock';
// Others

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: IUser = {} as IUser;

  constructor(private _router: Router) {}

  /**
   * Method to check if the user is authenticatd
   * @returns true or false
   */
  isAuthenticated(): boolean {
    return Object.keys(this._user).length > 0;
  }

  /**
   * Method to authenticate the user
   * @param LoginForm revice de reactiveForm email && password
   * @returns observable
   */
  authenticateUser(LoginForm: LoginForm): Observable<any> {
    const { email, password } = LoginForm;

    if (email === 'testoffline@alicunde.com' && password === '123456789') {
      return of(loginDataMock).pipe(
        tap(({ result }) => {
          const { token, user } = result;
          localStorage.setItem('token', token);
          this.user = user;
          this._router.navigateByUrl('dashboard');
        })
      );
    } else {
      return new Observable((observer) => {
        observer.error({ status: 401, message: 'Credenciales no válidas' });
      });
    }
  }

  /**
   * Method to validate the token
   * @returns observable
   */
  validateToken(): Observable<any> {
    //! is just to simulate the validate token the way to do this is similar but no it's the same.
    if (localStorage.getItem('token')) {
      return of(loginDataMock).pipe(
        tap(({ result }) => {
          const { token } = result;
          localStorage.setItem('token', token);
        })
      );
    } else {
      return of(null);
    }
  }

  /**
   * Method to logout sesion of the user
   */
  logout(): void {
    this.user = {} as IUser;
    localStorage.clear();
    this._router.navigate(['auth']);
  }

  set user(user: IUser) {
    this._user = user;
  }

  get user(): IUser {
    return this._user;
  }
}
