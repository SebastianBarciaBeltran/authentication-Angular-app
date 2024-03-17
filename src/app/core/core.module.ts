// Angular imports
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './services';
// Module inner imports
// Third-party libraries imports
// Services
// Components
// Standalone components
// Interfaces
// Others
export function appInitializer(auth: AuthService): () => Promise<any> {
  return () =>
    new Promise((resolve: any) =>
      auth
        .validateToken()
        .subscribe({
          next: ({ result }) => {
            auth.user = result.user;
          },
          error: (error: HttpErrorResponse) => {
            localStorage.clear();
            console.error('error appInitializer(): ', error);
          },
        })
        .add(resolve)
    );
}

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class CoreModule {}
