import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { WeatherInfoComponent } from './weather-info.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    exports: [WeatherInfoComponent],
    declarations: [WeatherInfoComponent],
})
export class WeatherInfoModule {}
