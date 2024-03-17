// Angular imports
import { NgModule } from '@angular/core';
// Module inner imports
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
// Third-party libraries imports
// Services
// Components
import { AppComponent } from './app.component';
// Standalone components
// Interfaces
// Others

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
