import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-button-event',
  templateUrl: './button-event.component.html',
  styleUrls: ['./button-event.component.css']
})
export class ButtonEventComponent {

  constructor (private analytics: AngularFireAnalytics){ }

  shotEvent() {
    this.analytics.logEvent('eliminar_item', {
      parameter: "hola",
    });
  }
}
