import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCityWeather } from 'src/app/features/dashboard/store/city-weather.actions';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
    constructor(private store: Store) {}

    addCity(city: string): void {
        this.store.dispatch(loadCityWeather({ city }));
    }
}
