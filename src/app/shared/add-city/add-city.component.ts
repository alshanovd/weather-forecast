import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadCityWeather } from 'src/app/features/dashboard/store/city-weather.actions';

@Component({
    selector: 'add-city',
    templateUrl: './add-city.component.html',
    styleUrls: ['./add-city.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCityComponent {
    form: FormGroup = new FormGroup({
        city: new FormControl('', Validators.required),
    });

    constructor(private store: Store) {}

    add(): void {
        if (!this.form.value.city) {
            return;
        }
        this.store.dispatch(loadCityWeather({ city: this.form.value.city }));
        this.form.reset();
    }
}
