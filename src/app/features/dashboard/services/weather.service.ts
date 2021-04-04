import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CityWeather } from '../model/city-weather.model';
import { HourWeather } from '../model/hourly-weather.model';
import {
    Coord,
    RawCityWeather,
    RawHourlyWeather,
    RawHourWeather,
} from '../model/raw-open-weather.model';

// I've decided to not separate this service, however in some cases it make sense

@Injectable()
export class WeatherService {
    private readonly baseUri: string = `${environment.api}data/2.5`;
    private units: 'metric' | 'imperial' = 'metric';

    constructor(private http: HttpClient) {}

    getCityWeather(q: string): Observable<CityWeather> {
        const params: HttpParams = this.getCityWeatherParams(q);

        return this.http
            .get<RawCityWeather>(`${this.baseUri}/weather`, { params })
            .pipe(map((raw: RawCityWeather) => new CityWeather(raw)));
    }

    getWeatherHours(coord: Coord): Observable<HourWeather[]> {
        const params: HttpParams = this.getWeatherHoursParams(coord);
        const now = Number(new Date());

        return this.http
            .get<RawHourlyWeather>(`${this.baseUri}/onecall`, { params })
            .pipe(
                map((raw: RawHourlyWeather) =>
                    raw.hourly
                        .filter((hour: RawHourWeather) => now < hour.dt * 1000)
                        .splice(0, 12)
                        .map((hour: RawHourWeather) => new HourWeather(hour))
                )
            );
    }

    private getWeatherHoursParams(coord: Coord): HttpParams {
        const coordinates = { lat: String(coord.lat), lon: String(coord.lon) };
        const params: HttpParams = new HttpParams({
            fromObject: {
                exclude: 'current,minutely,daily,alerts',
                appid: environment.appid,
                units: this.units,
                ...coordinates,
            },
        });
        return params;
    }

    private getCityWeatherParams(q: string): HttpParams {
        return new HttpParams({
            fromObject: {
                q,
                units: this.units,
                appid: environment.appid,
            },
        });
    }
}
