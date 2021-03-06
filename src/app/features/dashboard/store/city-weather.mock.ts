import {
    RawCityWeather,
    RawHourlyWeather,
} from '../model/raw-open-weather.model';

export const rawCityWeather: RawCityWeather = {
    coord: {
        lon: 37.6156,
        lat: 55.7522,
    },
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
        },
    ],
    base: 'stations',
    main: {
        temp: 5.33,
        feels_like: 1.75,
        temp_min: 5,
        temp_max: 6,
        pressure: 1000,
        humidity: 45,
    },
    visibility: 10000,
    wind: {
        speed: 5,
        deg: 180,
    },
    clouds: {
        all: 0,
    },
    dt: 1617643773,
    sys: {
        type: 1,
        id: 9027,
        country: 'RU',
        sunrise: 1617590989,
        sunset: 1617639255,
    },
    timezone: 10800,
    id: 524901,
    name: 'Moscow',
    cod: 200,
};

export const rawHourlyWeather: RawHourlyWeather = {
    lat: 55.7522,
    lon: 37.6156,
    timezone: 'Europe/Moscow',
    timezone_offset: 10800,
    hourly: [
        {
            dt: 1617642000,
            temp: 5.33,
            feels_like: 2.24,
            pressure: 1000,
            humidity: 45,
            dew_point: -5,
            uvi: 0,
            clouds: 0,
            visibility: 10000,
            wind_speed: 4.04,
            wind_deg: 174,
            wind_gust: 11.33,
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'clear sky',
                    icon: '01n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617645600,
            temp: 3.68,
            feels_like: -0.02,
            pressure: 1002,
            humidity: 62,
            dew_point: -2.58,
            uvi: 0,
            clouds: 31,
            visibility: 10000,
            wind_speed: 4.44,
            wind_deg: 174,
            wind_gust: 12.31,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617649200,
            temp: 2.41,
            feels_like: -1.62,
            pressure: 1003,
            humidity: 73,
            dew_point: -1.7,
            uvi: 0,
            clouds: 75,
            visibility: 10000,
            wind_speed: 4.49,
            wind_deg: 179,
            wind_gust: 13.11,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617652800,
            temp: 1.57,
            feels_like: -2.53,
            pressure: 1004,
            humidity: 79,
            dew_point: -1.48,
            uvi: 0,
            clouds: 92,
            visibility: 10000,
            wind_speed: 4.28,
            wind_deg: 182,
            wind_gust: 12.81,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617656400,
            temp: 1.04,
            feels_like: -3.09,
            pressure: 1004,
            humidity: 81,
            dew_point: -1.63,
            uvi: 0,
            clouds: 94,
            visibility: 10000,
            wind_speed: 4.12,
            wind_deg: 181,
            wind_gust: 12.73,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617660000,
            temp: 0.87,
            feels_like: -3.31,
            pressure: 1003,
            humidity: 80,
            dew_point: -2.24,
            uvi: 0,
            clouds: 94,
            visibility: 10000,
            wind_speed: 4.15,
            wind_deg: 180,
            wind_gust: 12.97,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617663600,
            temp: 0.7,
            feels_like: -3.58,
            pressure: 1003,
            humidity: 79,
            dew_point: -2.45,
            uvi: 0,
            clouds: 86,
            visibility: 10000,
            wind_speed: 4.24,
            wind_deg: 180,
            wind_gust: 12.97,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617667200,
            temp: 0.6,
            feels_like: -3.74,
            pressure: 1003,
            humidity: 79,
            dew_point: -2.55,
            uvi: 0,
            clouds: 76,
            visibility: 10000,
            wind_speed: 4.29,
            wind_deg: 181,
            wind_gust: 13.11,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617670800,
            temp: 0.6,
            feels_like: -3.73,
            pressure: 1003,
            humidity: 79,
            dew_point: -2.54,
            uvi: 0,
            clouds: 46,
            visibility: 10000,
            wind_speed: 4.27,
            wind_deg: 180,
            wind_gust: 13.42,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617674400,
            temp: 0.6,
            feels_like: -3.88,
            pressure: 1003,
            humidity: 79,
            dew_point: -2.48,
            uvi: 0,
            clouds: 68,
            visibility: 10000,
            wind_speed: 4.51,
            wind_deg: 178,
            wind_gust: 13.56,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617678000,
            temp: 0.62,
            feels_like: -3.89,
            pressure: 1003,
            humidity: 79,
            dew_point: -2.54,
            uvi: 0,
            clouds: 78,
            visibility: 10000,
            wind_speed: 4.57,
            wind_deg: 176,
            wind_gust: 13.97,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617681600,
            temp: 1.15,
            feels_like: -3.41,
            pressure: 1003,
            humidity: 77,
            dew_point: -2.41,
            uvi: 0.19,
            clouds: 83,
            visibility: 10000,
            wind_speed: 4.87,
            wind_deg: 179,
            wind_gust: 14.26,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617685200,
            temp: 2.37,
            feels_like: -2.09,
            pressure: 1003,
            humidity: 73,
            dew_point: -1.95,
            uvi: 0.56,
            clouds: 78,
            visibility: 10000,
            wind_speed: 5.26,
            wind_deg: 178,
            wind_gust: 13.86,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617688800,
            temp: 3.89,
            feels_like: -0.43,
            pressure: 1003,
            humidity: 67,
            dew_point: -1.56,
            uvi: 1.13,
            clouds: 73,
            visibility: 10000,
            wind_speed: 5.8,
            wind_deg: 178,
            wind_gust: 13.17,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617692400,
            temp: 5.61,
            feels_like: 1.56,
            pressure: 1003,
            humidity: 60,
            dew_point: -1.39,
            uvi: 1.86,
            clouds: 19,
            visibility: 10000,
            wind_speed: 6.28,
            wind_deg: 178,
            wind_gust: 12.82,
            weather: [
                {
                    id: 801,
                    main: 'Clouds',
                    description: 'few clouds',
                    icon: '02d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617696000,
            temp: 7.21,
            feels_like: 3.51,
            pressure: 1002,
            humidity: 55,
            dew_point: -1.19,
            uvi: 2.51,
            clouds: 17,
            visibility: 10000,
            wind_speed: 6.54,
            wind_deg: 183,
            wind_gust: 12.17,
            weather: [
                {
                    id: 801,
                    main: 'Clouds',
                    description: 'few clouds',
                    icon: '02d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617699600,
            temp: 8.36,
            feels_like: 4.89,
            pressure: 1002,
            humidity: 52,
            dew_point: -0.73,
            uvi: 2.9,
            clouds: 34,
            visibility: 10000,
            wind_speed: 6.8,
            wind_deg: 191,
            wind_gust: 12.2,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617703200,
            temp: 8.6,
            feels_like: 5.35,
            pressure: 1002,
            humidity: 53,
            dew_point: -0.22,
            uvi: 1.63,
            clouds: 50,
            visibility: 10000,
            wind_speed: 6.33,
            wind_deg: 197,
            wind_gust: 11.16,
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617706800,
            temp: 8.71,
            feels_like: 5.67,
            pressure: 1002,
            humidity: 55,
            dew_point: 0.22,
            uvi: 1.41,
            clouds: 60,
            visibility: 10000,
            wind_speed: 5.81,
            wind_deg: 194,
            wind_gust: 11.2,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617710400,
            temp: 8.96,
            feels_like: 5.97,
            pressure: 1003,
            humidity: 56,
            dew_point: 0.72,
            uvi: 1.04,
            clouds: 67,
            visibility: 10000,
            wind_speed: 5.85,
            wind_deg: 196,
            wind_gust: 10.4,
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617714000,
            temp: 8.96,
            feels_like: 6.1,
            pressure: 1003,
            humidity: 58,
            dew_point: 1.07,
            uvi: 0.24,
            clouds: 100,
            visibility: 10000,
            wind_speed: 5.5,
            wind_deg: 199,
            wind_gust: 9.76,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617717600,
            temp: 8.81,
            feels_like: 6.1,
            pressure: 1003,
            humidity: 59,
            dew_point: 1.32,
            uvi: 0.12,
            clouds: 100,
            visibility: 10000,
            wind_speed: 5,
            wind_deg: 197,
            wind_gust: 10.15,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617721200,
            temp: 8.25,
            feels_like: 5.69,
            pressure: 1003,
            humidity: 62,
            dew_point: 1.51,
            uvi: 0.04,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.33,
            wind_deg: 192,
            wind_gust: 8.89,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617724800,
            temp: 7.54,
            feels_like: 5.11,
            pressure: 1004,
            humidity: 67,
            dew_point: 1.82,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 3.76,
            wind_deg: 179,
            wind_gust: 9.12,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617728400,
            temp: 6.61,
            feels_like: 4.15,
            pressure: 1004,
            humidity: 72,
            dew_point: 2.03,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 3.45,
            wind_deg: 171,
            wind_gust: 9.2,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617732000,
            temp: 5.89,
            feels_like: 3.42,
            pressure: 1005,
            humidity: 75,
            dew_point: 1.78,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 3.22,
            wind_deg: 177,
            wind_gust: 9.29,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617735600,
            temp: 5.42,
            feels_like: 3.14,
            pressure: 1005,
            humidity: 77,
            dew_point: 1.65,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 2.82,
            wind_deg: 185,
            wind_gust: 7.95,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.07,
        },
        {
            dt: 1617739200,
            temp: 4.97,
            feels_like: 3.01,
            pressure: 1005,
            humidity: 79,
            dew_point: 1.59,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 2.34,
            wind_deg: 173,
            wind_gust: 6.25,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.11,
        },
        {
            dt: 1617742800,
            temp: 4.22,
            feels_like: 2.41,
            pressure: 1005,
            humidity: 82,
            dew_point: 1.49,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 2.05,
            wind_deg: 170,
            wind_gust: 4.82,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.12,
        },
        {
            dt: 1617746400,
            temp: 3.62,
            feels_like: 1.84,
            pressure: 1005,
            humidity: 85,
            dew_point: 1.39,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 1.93,
            wind_deg: 174,
            wind_gust: 4.58,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.12,
        },
        {
            dt: 1617750000,
            temp: 3.12,
            feels_like: 1.9,
            pressure: 1005,
            humidity: 88,
            dew_point: 1.35,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 1.43,
            wind_deg: 181,
            wind_gust: 2.85,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.08,
        },
        {
            dt: 1617753600,
            temp: 2.61,
            feels_like: 2.61,
            pressure: 1005,
            humidity: 91,
            dew_point: 1.2,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 1.02,
            wind_deg: 160,
            wind_gust: 1.12,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.08,
        },
        {
            dt: 1617757200,
            temp: 2.42,
            feels_like: 0.95,
            pressure: 1005,
            humidity: 91,
            dew_point: 1.15,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 1.54,
            wind_deg: 145,
            wind_gust: 2.09,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.06,
        },
        {
            dt: 1617760800,
            temp: 2.17,
            feels_like: -0.03,
            pressure: 1005,
            humidity: 91,
            dew_point: 0.94,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 2.09,
            wind_deg: 138,
            wind_gust: 3.59,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04n',
                },
            ],
            pop: 0.06,
        },
        {
            dt: 1617764400,
            temp: 2.07,
            feels_like: -0.48,
            pressure: 1005,
            humidity: 90,
            dew_point: 0.62,
            uvi: 0,
            clouds: 100,
            visibility: 10000,
            wind_speed: 2.41,
            wind_deg: 140,
            wind_gust: 7.37,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0.06,
        },
        {
            dt: 1617768000,
            temp: 2.27,
            feels_like: -0.38,
            pressure: 1004,
            humidity: 89,
            dew_point: 0.62,
            uvi: 0.11,
            clouds: 100,
            visibility: 10000,
            wind_speed: 2.55,
            wind_deg: 127,
            wind_gust: 7,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0.02,
        },
        {
            dt: 1617771600,
            temp: 3.67,
            feels_like: 0.71,
            pressure: 1004,
            humidity: 84,
            dew_point: 1.22,
            uvi: 0.33,
            clouds: 100,
            visibility: 10000,
            wind_speed: 3.26,
            wind_deg: 145,
            wind_gust: 10.1,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617775200,
            temp: 5.57,
            feels_like: 2.51,
            pressure: 1004,
            humidity: 76,
            dew_point: 1.67,
            uvi: 0.67,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.08,
            wind_deg: 154,
            wind_gust: 11.17,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617778800,
            temp: 7.12,
            feels_like: 4.31,
            pressure: 1004,
            humidity: 68,
            dew_point: 1.71,
            uvi: 1.15,
            clouds: 100,
            visibility: 10000,
            wind_speed: 4.3,
            wind_deg: 157,
            wind_gust: 10.46,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617782400,
            temp: 8.64,
            feels_like: 5.87,
            pressure: 1004,
            humidity: 60,
            dew_point: 1.27,
            uvi: 1.56,
            clouds: 100,
            visibility: 10000,
            wind_speed: 5.04,
            wind_deg: 160,
            wind_gust: 10.16,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0,
        },
        {
            dt: 1617786000,
            temp: 9.67,
            feels_like: 6.95,
            pressure: 1003,
            humidity: 52,
            dew_point: 0.43,
            uvi: 1.79,
            clouds: 100,
            visibility: 10000,
            wind_speed: 5.61,
            wind_deg: 163,
            wind_gust: 10.69,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0.02,
        },
        {
            dt: 1617789600,
            temp: 10.17,
            feels_like: 8.55,
            pressure: 1003,
            humidity: 50,
            dew_point: 0.41,
            uvi: 1.96,
            clouds: 100,
            visibility: 10000,
            wind_speed: 5.81,
            wind_deg: 155,
            wind_gust: 10.75,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0.06,
        },
        {
            dt: 1617793200,
            temp: 9.79,
            feels_like: 6.8,
            pressure: 1002,
            humidity: 53,
            dew_point: 0.73,
            uvi: 1.7,
            clouds: 100,
            visibility: 10000,
            wind_speed: 6.56,
            wind_deg: 153,
            wind_gust: 9.76,
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            pop: 0.18,
        },
        {
            dt: 1617796800,
            temp: 6.33,
            feels_like: 2.52,
            pressure: 1003,
            humidity: 82,
            dew_point: 3.45,
            uvi: 1.26,
            clouds: 100,
            visibility: 8808,
            wind_speed: 6.17,
            wind_deg: 151,
            wind_gust: 9.77,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            pop: 0.52,
            rain: {
                '1h': 0.58,
            },
        },
        {
            dt: 1617800400,
            temp: 5.01,
            feels_like: 1.32,
            pressure: 1003,
            humidity: 91,
            dew_point: 3.68,
            uvi: 0.56,
            clouds: 100,
            visibility: 4457,
            wind_speed: 5.06,
            wind_deg: 146,
            wind_gust: 10.2,
            weather: [
                {
                    id: 501,
                    main: 'Rain',
                    description: 'moderate rain',
                    icon: '10d',
                },
            ],
            pop: 0.92,
            rain: {
                '1h': 1.52,
            },
        },
        {
            dt: 1617804000,
            temp: 4.37,
            feels_like: 0.82,
            pressure: 1002,
            humidity: 94,
            dew_point: 3.56,
            uvi: 0.27,
            clouds: 100,
            visibility: 327,
            wind_speed: 4.48,
            wind_deg: 139,
            wind_gust: 8.98,
            weather: [
                {
                    id: 501,
                    main: 'Rain',
                    description: 'moderate rain',
                    icon: '10d',
                },
            ],
            pop: 0.98,
            rain: {
                '1h': 1.21,
            },
        },
        {
            dt: 1617807600,
            temp: 3.84,
            feels_like: 0.49,
            pressure: 1001,
            humidity: 94,
            dew_point: 3.09,
            uvi: 0.09,
            clouds: 100,
            visibility: 96,
            wind_speed: 3.91,
            wind_deg: 134,
            wind_gust: 9.16,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            pop: 0.98,
            rain: {
                '1h': 0.53,
            },
        },
        {
            dt: 1617811200,
            temp: 3.53,
            feels_like: 0.64,
            pressure: 1001,
            humidity: 95,
            dew_point: 2.8,
            uvi: 0,
            clouds: 100,
            visibility: 71,
            wind_speed: 3.13,
            wind_deg: 131,
            wind_gust: 7.77,
            weather: [
                {
                    id: 500,
                    main: 'Rain',
                    description: 'light rain',
                    icon: '10d',
                },
            ],
            pop: 0.98,
            rain: {
                '1h': 0.13,
            },
        },
    ],
};
