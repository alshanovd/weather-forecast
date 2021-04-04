import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { AddCityModule } from 'src/app/shared/add-city/add-city.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

const TUI_MODULE = [TuiInputModule, TuiButtonModule];

@NgModule({
    imports: [
        TUI_MODULE,
        AddCityModule,
        LayoutRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [LayoutComponent],
})
export class LayoutModule {}
