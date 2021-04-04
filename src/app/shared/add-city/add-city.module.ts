import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { AddCityComponent } from './add-city.component';

@NgModule({
    imports: [ReactiveFormsModule, TuiInputModule, TuiButtonModule],
    declarations: [AddCityComponent],
    exports: [AddCityComponent],
})
export class AddCityModule {}
