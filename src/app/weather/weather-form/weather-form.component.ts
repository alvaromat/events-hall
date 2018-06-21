import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

class City {
  coord: Object;
  country: string;
  id: number;
  name: string;
}

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

  filteredCities: Observable<City[]>;
  cityList: City[];
  selectedCity: City;
  @Input() configuration;
  @Output() save = new EventEmitter<null>();
  @ViewChild('cityInput') cityInput: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<City[]>('assets/city.list.min.json').subscribe(result => {
      this.cityList = result;
      this.setUpAutocomplete();
      this.setInitialCity();
    });
  }

  setUpAutocomplete() {
    const elem = this.cityInput.nativeElement as HTMLInputElement;
    this.filteredCities = fromEvent(elem, 'input').pipe(
      map((e: KeyboardEvent) => e.target['value']),
      filter(value => value.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      map(cityName => this.filter(cityName))
    );
  }

  setInitialCity() {
    if (this.configuration.cityId) {
      this.selectedCity = this.cityList.find(city => +this.configuration.cityId === city.id);
    }
  }

  filter(name: string): City[] {
    return this.cityList.filter(city => city.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) === 0);
  }

  displayCity(city?: City) {
    return city ? city.name : undefined;
  }

  selectCity(event: MatAutocompleteSelectedEvent) {
    this.selectedCity = event.option.value || undefined;
    this.configuration.cityId = this.selectedCity.id;
    this.save.emit();
  }

}
