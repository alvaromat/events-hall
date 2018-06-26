import { Component, Input } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-traffic-view',
  templateUrl: './traffic-view.component.html',
  styleUrls: ['./traffic-view.component.scss']
})
export class TrafficViewComponent {
  @Input() configuration;

  onMapReady(mapInstance: google.maps.Map) {
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(mapInstance);
  }
}
