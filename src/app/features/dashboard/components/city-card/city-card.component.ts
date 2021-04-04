import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CityWeather } from '../../model/city-weather.model';
import { Coord } from '../../model/raw-open-weather.model';
import { loadWeatherHours } from '../../store/city-weather.actions';

@Component({
    selector: 'city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
    @Input()
    cityWeather: CityWeather | undefined;

    constructor(private store: Store) {}

    ngOnInit(): void {}

    onOpenChange(): void {
        if (this.cityWeather?.opened === false) {
            const weather = {
                coord: this.cityWeather?.coord as Coord,
                city: this.cityWeather?.city as string,
            };
            this.store.dispatch(loadWeatherHours(weather));
        }
    }
}
