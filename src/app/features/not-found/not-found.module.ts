import { NgModule } from '@angular/core';
import { GeneralModule } from 'src/app/shared/general/general.module';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [GeneralModule, NotFoundRoutingModule],
    exports: [NotFoundComponent],
    declarations: [NotFoundComponent],
})
export class NotFoundModule {}
