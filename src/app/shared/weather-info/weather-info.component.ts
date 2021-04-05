import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from '../../features/dashboard/model/weather.model';

@Component({
    selector: 'weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherInfoComponent {
    // Reusable component with the general interface Weather
    // If we want to add an another represent, we can use this component using <ng-content select="...">
    @Input()
    weather: Weather | undefined;

    @Input()
    size: 's' | 'm' = 'm';
}
