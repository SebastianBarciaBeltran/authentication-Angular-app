// Angular imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Module inner imports
// Third-party libraries imports
// Services
import { CustomValidatorsService } from '@shared/services';
import { ErrorComponent } from '@shared/components';
import { ReactiveFormService } from './services/reactive-forms.service';
// Components
// Standalone components
// Interfaces
// Others
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    //? Standalone components
    ErrorComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    //? Standalone components
    ErrorComponent,
  ],
  providers: [CustomValidatorsService, ReactiveFormService],
})
export class SharedModule {}
