import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  mapOptions: google.maps.MapOptions = {
    center: {lat: 52.25, lng: 20.99},
    zoom: 12,
  };
}
