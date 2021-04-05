import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/** AddCityComponent dumb component to simply emit input value above */

@Component({
    selector: 'add-city',
    templateUrl: './add-city.component.html',
    styleUrls: ['./add-city.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCityComponent {
    @Output()
    added: EventEmitter<string> = new EventEmitter<string>();

    form: FormGroup = new FormGroup({
        city: new FormControl('', Validators.required),
    });

    add(): void {
        if (!this.form.value.city) {
            return;
        }
        this.added.emit(this.form.value.city);
        this.form.reset();
    }
}
