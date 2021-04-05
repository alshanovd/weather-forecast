import { reducer, initialState } from './city-weather.reducer';
import * as CityWeatherActions from './city-weather.actions';
import { CityWeather } from '../model/city-weather.model';
import {
    RawCityWeather,
    RawHourWeather,
} from '../model/raw-open-weather.model';
import { rawCityWeather, rawHourlyWeather } from './city-weather.mock';
import { HourWeather } from '../model/hourly-weather.model';

const cityWeather = new CityWeather(rawCityWeather as RawCityWeather);
const hours = rawHourlyWeather.hourly.map(
    (hour: RawHourWeather) => new HourWeather(hour)
);

describe('CityWeather Reducer', () => {
    describe('unknown action', () => {
        it('should return the defautl state', () => {
            const action = { type: 'Unknown ' };
            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    describe('loadCityWeatherSuccess action', () => {
        it('should return changed CityWeather state', () => {
            const action = CityWeatherActions.loadCityWeatherSuccess({
                cityWeather,
            });
            const result = reducer(initialState, action);

            expect(result).not.toBe(initialState);
        });
    });

    describe('loadWeatherHoursSuccess action', () => {
        it('should return changed WeatherHours state', () => {
            const loadCityAction = CityWeatherActions.loadCityWeatherSuccess({
                cityWeather,
            });
            const loadedCity = reducer(initialState, loadCityAction);
            const loadHoursAction = CityWeatherActions.loadWeatherHoursSuccess({
                hours,
                city: cityWeather.city,
            });
            const result = reducer(loadedCity, loadHoursAction);

            expect(result).not.toBe(initialState);
        });
    });
});
