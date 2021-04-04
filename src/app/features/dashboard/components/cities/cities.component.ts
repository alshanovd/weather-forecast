import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CityWeather } from '../../model/city-weather.model';
import { loadCityWeathers } from '../../store/city-weather.actions';
import { selectCityWeathers } from '../../store/city-weather.selectors';

@Component({
    selector: 'cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent implements OnInit {
    cities = ['Bucharest', 'Paris', 'Prague', 'Lisbon', 'Dortmund'];
    cityWeathers$: Observable<CityWeather[]> = of([]);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadCityWeathers({ cities: this.cities }));
        this.cityWeathers$ = this.store.pipe(select(selectCityWeathers));
    }
}
