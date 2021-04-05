import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { AddCityComponent } from './add-city.component';

describe('AddCityComponent', () => {
    let fixture: ComponentFixture<AddCityComponent>;
    let component: AddCityComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiSvgModule,
                StoreModule.forRoot({}),
                TuiButtonModule,
                TuiInputModule,
                ReactiveFormsModule,
            ],
            declarations: [AddCityComponent],
        })
            .overrideComponent(AddCityComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default },
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddCityComponent);
        component = fixture.componentInstance;
    });

    it('should create <add-city> component', () => {
        expect(component).toBeTruthy();
    });

    it('should input and emit value', async () => {
        const inputValue = 'Moscow';
        component.form.controls.city.setValue(inputValue);

        fixture.detectChanges();

        let city: string;
        component.added.subscribe((addedCity: string) => {
            city = addedCity;
            expect(inputValue).toBe(city);
        });

        const tuiButton = fixture.nativeElement.querySelector('button');
        tuiButton.click();
    });
});
