import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
    iconsPathFactory,
    TuiModeModule,
    TuiRootModule,
    TuiThemeNightModule,
    TUI_ICONS_PATH,
} from '@taiga-ui/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const TUI_MODULES = [TuiRootModule, TuiThemeNightModule, TuiModeModule];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,

        TUI_MODULES,

        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot(),

        AppRoutingModule,
    ],
    providers: [
        {
            provide: TUI_ICONS_PATH,
            useValue: iconsPathFactory('assets/taiga-ui/icons/'),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
