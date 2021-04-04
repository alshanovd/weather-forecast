import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cityWeathersFeatureKey } from './city-weather.reducer';
import * as fromReducer from './city-weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CityWeatherEffects } from './city-weather.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(cityWeathersFeatureKey, fromReducer.reducer),
        EffectsModule.forFeature([CityWeatherEffects]),
    ],
})
export class CityWeatherStoreModule {}
