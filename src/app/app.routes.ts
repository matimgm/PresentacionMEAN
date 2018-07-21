import { PagesComponent } from './pages/pages.component';

import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';


const APP_ROUTES: Routes = [
    // {
    //     path: '',
    //     component: PagesComponent,
    //     children: [
    //         {path: 'home', component: HomeComponent},
    //         {path: 'progres', component: ProgressComponent},
    //         {path: 'graficas1', component: Graficas1Component},
    //         {path: '', redirectTo: '/home', pathMatch: 'full' },

    //     ]
    // },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: '**', component: PaginaErrorComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
