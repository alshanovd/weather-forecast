// I've decided to not decompose interfaces of OpenWeather as it uses only once

export interface RawCityWeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface RawCityWeather {
    coord: Coord;
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    base: string;
    main: RawCityWeatherMain;
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    rain?: {
        [key: string]: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface RawHourlyWeather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    hourly: RawHourWeather[];
}

export interface RawHourWeather {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    pop: number;
    rain?: {
        [key: string]: number;
    };
}

export interface Coord {
    lon: number;
    lat: number;
}
