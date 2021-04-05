import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuiSvgModule } from '@taiga-ui/core';
import { WeatherInfoComponent } from './weather-info.component';
import { Weather } from '../../features/dashboard/model/weather.model';

describe('WeatherInfoComponent', () => {
    let fixture: ComponentFixture<WeatherInfoComponent>;
    let component: WeatherInfoComponent;

    const weather: Weather = {
        icon: 'assets/01d.png',
        temp: '+5',
        wind: {
            deg: 100,
            speed: 10,
        },
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiSvgModule],
            declarations: [WeatherInfoComponent],
        })
            .overrideComponent(WeatherInfoComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default },
            })
            .compileComponents();

        fixture = TestBed.createComponent(WeatherInfoComponent);
        component = fixture.componentInstance;
    });

    it('should create <weather-info> component', () => {
        expect(component).toBeTruthy();
    });

    it('should display <weather-info> size S', async () => {
        component.size = 's';
        component.weather = { ...weather };

        fixture.detectChanges();

        const infoSmallDiv = fixture.nativeElement.querySelector('.info-small');
        const tempS = fixture.nativeElement.querySelector('.temp-s');
        const windS = fixture.nativeElement.querySelector('.wind-s');

        expect(infoSmallDiv).toBeTruthy('[S] WeatherInfo is not displayed');
        expect(tempS?.textContent).toContain(
            weather.temp,
            '[S] Temperature is incorrect'
        );
        expect(windS?.textContent).toContain(
            weather.wind.speed,
            '[S] Wind speed is incorrect'
        );
    });

    it('should display <weather-info> size M', async () => {
        component.size = 'm';
        component.weather = { ...weather };

        fixture.detectChanges();

        const infoSmallDiv = fixture.nativeElement.querySelector(
            '.info-middle'
        );
        const tempM = fixture.nativeElement.querySelector('.temp-m');
        const windM = fixture.nativeElement.querySelector('.wind-m');

        expect(infoSmallDiv).toBeTruthy();
        expect(tempM?.textContent).toContain(
            weather.temp,
            '[M] Temperature is incorrect'
        );
        expect(windM?.textContent).toContain(
            weather.wind.speed,
            '[M] Wind speed is incorrect'
        );
    });
});
