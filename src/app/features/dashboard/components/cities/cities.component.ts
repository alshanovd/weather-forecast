import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CityWeather } from '../../model/city-weather.model';
import { loadCityWeathers } from '../../store/city-weather.actions';
import { selectCityWeathers } from '../../store/city-weather.selectors';

@Component({
    selector: 'cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent implements OnInit, OnDestroy {
    cities = ['Bucharest', 'Paris', 'Prague', 'Lisbon', 'Dortmund'];
    cityWeathers$: Observable<CityWeather[]> = of([]);

    private destroy$: Subject<void> = new Subject();

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadCityWeathers({ cities: this.cities }));
        this.cityWeathers$ = this.store.pipe(
            select(selectCityWeathers),
            distinctUntilChanged((x, y) => x.length === y.length),
            takeUntil(this.destroy$)
        );
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
