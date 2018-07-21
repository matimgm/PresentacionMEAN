import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProgressComponent,
        Graficas1Component
      ],
    exports: [
        HomeComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],
})

export class PagesModule { }
