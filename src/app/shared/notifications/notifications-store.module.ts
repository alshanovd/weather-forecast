import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NotificationsEffects } from './notifications.effects';

@NgModule({
    imports: [EffectsModule.forFeature([NotificationsEffects])],
})
export class NotificationsStoreModule {}
