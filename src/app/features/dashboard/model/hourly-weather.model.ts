import { Weather } from 'src/app/shared/weather-info/weather.model';
import { getIcon, getTempWithSign } from './city-weather.model';
import { RawHourWeather } from './raw-open-weather.model';
import { Wind } from './wind.model';

export class HourWeather implements Weather {
    time: string = '';
    timestamp: string = '';
    temp: string = '';
    icon: string = '';
    wind: Wind = {
        deg: 0,
        speed: 10,
    };

    constructor(rawHourWeather: RawHourWeather) {
        this.temp = getTempWithSign(rawHourWeather.temp);
        const time = new Date(rawHourWeather.dt * 1000).getHours();
        const AmOrPm = time >= 12 ? 'PM' : 'AM';
        this.time = (time % 12) + ' ' + AmOrPm;
        this.icon = getIcon(rawHourWeather.weather[0].icon);
        this.wind = {
            deg: rawHourWeather.wind_deg,
            speed: Math.round(rawHourWeather.wind_speed),
        };
        this.timestamp = String(rawHourWeather.dt);
    }
}
