import { rawCityWeather } from '../store/city-weather.mock';
import { CityWeather } from './city-weather.model';

describe('CityWeather', () => {
    it('should convert raw data to CityWeather entity', () => {
        const rawData = { ...rawCityWeather };
        const cityWeather = new CityWeather(rawData);
        const expectedIcon = CityWeather.getIcon(rawData.weather[0].icon);
        const expectedTemp = CityWeather.getAvgTemp(rawData.main);

        expect(cityWeather.city).toEqual(rawData.name, 'City is not assigned');
        expect(cityWeather.coord).toEqual(
            rawData.coord,
            'Coord is not assigned'
        );
        expect(cityWeather.icon).toEqual(expectedIcon, 'Icon is not assigned');
        expect(cityWeather.temp).toEqual(
            expectedTemp,
            'Temperature is not assigned'
        );
    });
});
