import { Component, OnInit, Input, ViewChild, ElementRef, NgZone, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-traffic-form',
  templateUrl: './traffic-form.component.html',
  styleUrls: ['./traffic-form.component.scss']
})
export class TrafficFormComponent implements OnInit, OnDestroy {
  @Input() configuration;
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() save = new EventEmitter<null>();

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.setDefaultConfiguration();
    this.setUpAutocomplete();
  }

  ngOnDestroy() {
    this.save.emit();
  }

  private setDefaultConfiguration() {
    if (this.configuration) {
      if (!this.configuration.latitude || !this.configuration.longitude) {
        this.useMyLocation();
      }
      if (!this.configuration.zoom) {
        this.configuration.zoom = 16;
      }
      if (!this.configuration.showMarker) {
        this.configuration.showMarker = true;
      }
    }
  }

  private setUpAutocomplete() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry !== undefined || place.geometry !== null) {
            this.configuration.latitude = place.geometry.location.lat();
            this.configuration.longitude = place.geometry.location.lng();
            this.save.emit();
          }
        });
      });
    });
  }

  useMyLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.configuration.latitude = position.coords.latitude;
        this.configuration.longitude = position.coords.longitude;
        this.save.emit();
      },
    error => console.log(error));
    }
  }
}
