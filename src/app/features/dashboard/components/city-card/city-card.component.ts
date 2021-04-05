import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CityWeather } from '../../model/city-weather.model';
import { loadWeatherHours } from '../../store/city-weather.actions';
import { selectCityWeather } from '../../store/city-weather.selectors';

@Component({
    selector: 'city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit, OnDestroy {
    @Input()
    city: string = '';

    cityWeather$: Observable<CityWeather | undefined> | undefined;

    destroy$: Subject<void> = new Subject();

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.cityWeather$ = this.store.pipe(
            select(selectCityWeather, { city: this.city }),
            takeUntil(this.destroy$)
        );
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onOpenChange(cityWeather: CityWeather): void {
        if (cityWeather.opened === false) {
            const weather = {
                coord: cityWeather.coord,
                city: cityWeather.city,
            };
            this.store.dispatch(loadWeatherHours(weather));
        }
    }
}
