import { Component,OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
    
    constructor(
      private  analytics: AngularFireAnalytics
    ){
      this.analytics.logEvent('app_open', {"component": "AppComponent"});
    }
    ngOnInit(){
      this.analytics.setAnalyticsCollectionEnabled
      
      this.analytics.logEvent('app_open', {
        content_type: 'image',
        content_id: 'P12453'
      });
    }
}
