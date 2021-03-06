import { createAction, props } from '@ngrx/store';
import { CityWeather } from '../model/city-weather.model';
import { HttpErrorResponse } from '@angular/common/http';
import { HourWeather } from '../model/hourly-weather.model';
import { Coord } from '../model/raw-open-weather.model';

/** I've not added remove-item or clean-store actions as it isn't required by the task
 * However with the NgRx architecture them can be added in a couple minutes
 */

export const loadCityWeather = createAction(
    '[CityWeather/API] Load CityWeather',
    props<{ city: string }>()
);

export const loadCityWeatherSuccess = createAction(
    '[CityWeather/API] Load CityWeather Success',
    props<{ cityWeather: CityWeather }>()
);

export const loadCityWeatherError = createAction(
    '[CityWeather/API] Load CityWeather Error',
    props<{ city: string; error: HttpErrorResponse }>()
);

export const loadCityWeathers = createAction(
    '[CityWeather/API] Load CityWeathers',
    props<{ cities: string[] }>()
);

export const loadWeatherHours = createAction(
    '[CityWeather/API] Load WeatherHours',
    props<{ coord: Coord; city: string }>()
);

export const loadWeatherHoursSuccess = createAction(
    '[CityWeather/API] Load WeatherHours Success',
    props<{ hours: HourWeather[]; city: string }>()
);

export const loadWeatherHoursError = createAction(
    '[CityWeather/API] Load WeatherHours Error',
    props<{ city: string; error: HttpErrorResponse }>()
);
