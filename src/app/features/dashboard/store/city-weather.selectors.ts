import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cityWeathersFeatureKey } from './city-weather.reducer';
import * as fromReducer from './city-weather.reducer';
import { CityWeather } from '../model/city-weather.model';
import { HourWeather } from '../model/hourly-weather.model';
import { EntityState } from '@ngrx/entity';

const featureSelector = createFeatureSelector<fromReducer.CityWeatherState>(
    cityWeathersFeatureKey
);

export const selectCityWeather = createSelector(
    featureSelector,
    (
        cities: fromReducer.CityWeatherState,
        props: { internalId: number }
    ): CityWeather | undefined => cities.entities[props.internalId]
);

export const selectCityWeathers = createSelector(
    featureSelector,
    fromReducer.selectAll
);
