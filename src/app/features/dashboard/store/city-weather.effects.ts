import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    CreateEffectMetadata,
    ofType,
} from '@ngrx/effects';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { CityWeather } from '../model/city-weather.model';
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
    loadCityWeatherRequest,
} from './city-weather.actions';

@Injectable()
export class CityWeatherEffects {
    getCityWeather$ = this.getCityWeatherFn$();
    getCityWeathers$ = this.getCityWeathersFn$();
    getWeatherHours$ = this.getWeatherHoursFn$();
    createEmptyCityWeather$ = this.createEmptyCityWeatherFn$();

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService
    ) {}

    private createEmptyCityWeatherFn$(): CreateEffectMetadata {
        return createEffect(() =>
            this.actions$.pipe(
                ofType(loadCityWeather),
                switchMap(({ city }: { city: string }) => {
                    const emptyCityWeather = new CityWeather();
                    return [loadCityWeatherRequest({ city, emptyCityWeather })];
                })
            )
        );
    }

    private getCityWeatherFn$(): CreateEffectMetadata {
        return createEffect(() =>
            this.actions$.pipe(
                ofType(loadCityWeatherRequest),
                concatMap(
                    ({
                        city,
                        emptyCityWeather,
                    }: {
                        city: string;
                        emptyCityWeather: CityWeather;
                    }) =>
                        this.weatherService.getCityWeather(city).pipe(
                            map((cityWeather) => {
                                cityWeather.internalId =
                                    emptyCityWeather.internalId;
                                return loadCityWeatherSuccess({ cityWeather });
                            }),
                            catchError((error) => [
                                // There are no error notifications!
                                loadCityWeatherError({
                                    internalId: emptyCityWeather.internalId,
                                    error,
                                }),
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
                switchMap(({ coord, internalId }) =>
                    this.weatherService.getWeatherHours(coord).pipe(
                        map((hours: HourWeather[]) => {
                            return loadWeatherHoursSuccess({
                                hours,
                                internalId,
                            });
                        }),
                        catchError((error: HttpErrorResponse) => [
                            // There are no error notifications!
                            loadWeatherHoursError({ error, internalId }),
                        ])
                    )
                )
            )
        );
    }
}
