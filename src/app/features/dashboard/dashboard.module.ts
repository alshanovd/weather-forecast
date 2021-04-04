import { NgModule } from '@angular/core';
import {
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import { TuiAccordionModule, TuiIslandModule } from '@taiga-ui/kit';
import { GeneralModule } from 'src/app/shared/general/general.module';
import { WeatherInfoModule } from 'src/app/shared/weather-info/weather-info.module';
import { CitiesComponent } from './components/cities/cities.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CityWeatherStoreModule } from './store/city-weather-store.module';

const TUI_MODULES = [
    TuiIslandModule,
    TuiSvgModule,
    TuiNotificationModule,
    TuiLoaderModule,
];

@NgModule({
    imports: [
        GeneralModule,
        DashboardRoutingModule,
        HttpClientModule,

        TUI_MODULES,

        WeatherInfoModule,
        CityWeatherStoreModule,
    ],
    declarations: [CitiesComponent, CityCardComponent],
    providers: [WeatherService],
})
export class DashboardModule {}
