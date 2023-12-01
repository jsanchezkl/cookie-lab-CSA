import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieConsentModule } from '@notiz/cookie-monster';

import { AppComponent } from './app.component';
import { cookieConfig } from './cookie.config';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { ButtonEventComponent } from './button-event/button-event.component';

@NgModule({
  declarations: [AppComponent, ButtonEventComponent],
  imports: [BrowserModule, CookieConsentModule.forRoot(cookieConfig), provideFirebaseApp(() => initializeApp(environment.firebase)), provideAnalytics(() => getAnalytics())],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
