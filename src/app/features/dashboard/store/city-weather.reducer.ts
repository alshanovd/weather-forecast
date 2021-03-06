import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CityWeather } from '../model/city-weather.model';
import * as CityWeatherActions from './city-weather.actions';

// I prefer to keep store-folders in directories with features rather than put everything into the root folder

export const cityWeathersFeatureKey = 'cityWeathers';

export interface CityWeatherState extends EntityState<CityWeather> {}

export const cityWeatherAdapter: EntityAdapter<CityWeather> = createEntityAdapter<CityWeather>(
    {
        selectId: (cityWeather: CityWeather) => cityWeather.city,
    }
);

export const initialState: CityWeatherState = cityWeatherAdapter.getInitialState();

export const reducer = createReducer(
    initialState,
    on(CityWeatherActions.loadCityWeatherSuccess, (state, action) =>
        cityWeatherAdapter.upsertOne(action.cityWeather, state)
    ),
    on(CityWeatherActions.loadWeatherHoursSuccess, (state, action) =>
        cityWeatherAdapter.updateOne(
            {
                id: action.city,
                changes: {
                    hours: action.hours,
                    opened: true,
                    loading: false,
                },
            },
            state
        )
    ),
    on(CityWeatherActions.loadWeatherHours, (state, action) =>
        cityWeatherAdapter.updateOne(
            {
                id: action.city,
                changes: {
                    loading: true,
                },
            },
            state
        )
    ),
    on(CityWeatherActions.loadWeatherHoursError, (state, action) =>
        cityWeatherAdapter.updateOne(
            {
                id: action.city,
                changes: {
                    loading: false,
                },
            },
            state
        )
    )
);

export const { selectAll } = cityWeatherAdapter.getSelectors();
