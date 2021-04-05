import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/layout/layout.module').then(
                (m) => m.LayoutModule
            ),
    },
    // {
    //     path: 'login', // here will be a module for authorization
    // },
    {
        path: '**',
        loadChildren: () =>
            import('./features/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
