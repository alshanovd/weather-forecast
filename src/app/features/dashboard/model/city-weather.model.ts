import { Weather } from 'src/app/shared/weather-info/weather.model';
import { HourWeather } from './hourly-weather.model';
import { Coord, RawCityWeather } from './raw-open-weather.model';
import { Wind } from './wind.model';

// I thought to make an interface and an adapter, but this way looks more convinient
export class CityWeather implements Weather {
    coord: Coord;
    city: string;
    temp: string;
    icon: string;
    wind: Wind;
    flag: string;
    hours: HourWeather[];
    opened: boolean;
    loading: boolean = false;

    constructor(rawCityWeather: RawCityWeather) {
        this.temp = this.getAvgTemp(rawCityWeather.main);
        // I don't have any idea how many elements there are might be in the weather array.
        this.icon = getIcon(rawCityWeather.weather[0].icon);
        this.wind = {
            speed: Math.round(rawCityWeather.wind.speed),
            deg: rawCityWeather.wind.deg,
        };
        this.flag = this.getFlag(rawCityWeather.sys.country);
        this.city = rawCityWeather.name;
        this.coord = { ...rawCityWeather.coord };
        this.hours = [];
        this.opened = false;
    }

    private getFlag(country: string): string {
        // Obviously, it is better to keep flags locally as it is more secure
        return `https://www.countryflags.io/${country.toLocaleLowerCase()}/flat/24.png`;
    }

    private getAvgTemp({
        temp,
        feels_like,
        temp_max,
        temp_min,
    }: {
        temp: number;
        feels_like: number;
        temp_max: number;
        temp_min: number;
    }): string {
        const temperature = (temp + feels_like + temp_min + temp_max) / 4;
        return getTempWithSign(temperature);
    }
}

export function getTempWithSign(temperature: number): string {
    // I use ternary operator only for very simple logical assigns
    const sign = temperature > 0 ? '+' : temperature < 0 ? '-' : '';
    return `${sign}${Math.round(temperature)}`;
}

export function getIcon(icon: string): string {
    if (icon) {
        return `/assets/${icon}.png`;
    }
    return `/assets/unknown.png`;
}
