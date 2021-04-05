import { NgModule } from '@angular/core';
import { GeneralModule } from 'src/app/shared/general/general.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    imports: [GeneralModule, NotFoundRoutingModule],
    exports: [NotFoundComponent],
    declarations: [NotFoundComponent],
})
export class NotFoundModule {}
