import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Weather } from './weather.model';

@Component({
    selector: 'weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherInfoComponent implements OnInit {
    @Input()
    weather: Weather | undefined;

    @Input()
    size: 's' | 'm' = 'm';

    constructor() {}

    ngOnInit(): void {}
}
