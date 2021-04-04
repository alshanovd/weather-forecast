import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    CreateEffectMetadata,
    ofType,
} from '@ngrx/effects';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { HourWeather } from '../model/hourly-weather.model';
import { WeatherService } from '../services/weather.service';
import {
    loadCityWeather,
    loadCityWeatherError,
    loadCityWeathers,
    loadCityWeatherSuccess,
    loadWeatherHours,
    loadWeatherHoursSuccess,
    loadWeatherHoursError,
} from './city-weather.actions';

@Injectable()
export class CityWeatherEffects {
    getCityWeather$ = this.getCityWeatherFn$();
    getCityWeathers$ = this.getCityWeathersFn$();
    getWeatherHours$ = this.getWeatherHoursFn$();

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService
    ) {}

    private getCityWeatherFn$(): CreateEffectMetadata {
        return createEffect(() =>
            this.actions$.pipe(
                ofType(loadCityWeather),
                concatMap(({ city }: { city: string }) =>
                    this.weatherService.getCityWeather(city).pipe(
                        map((cityWeather) =>
                            loadCityWeatherSuccess({ cityWeather })
                        ),
                        catchError((error) => [
                            loadCityWeatherError({ city, error }),
                        ])
                    )
                )
            )
        );
    }

    private getCityWeathersFn$(): CreateEffectMetadata {
        return createEffect(() =>
            this.actions$.pipe(
                ofType(loadCityWeathers),
                switchMap(({ cities }: { cities: string[] }) =>
                    cities.map((city) => loadCityWeather({ city }))
                )
            )
        );
    }

    private getWeatherHoursFn$(): CreateEffectMetadata {
        return createEffect(() =>
            this.actions$.pipe(
                ofType(loadWeatherHours),
                switchMap(({ coord, city }) =>
                    this.weatherService.getWeatherHours(coord).pipe(
                        map((hours: HourWeather[]) => {
                            return loadWeatherHoursSuccess({ hours, city });
                        }),
                        catchError((error: HttpErrorResponse) => [
                            loadWeatherHoursError({ error, city }),
                        ])
                    )
                )
            )
        );
    }
}
