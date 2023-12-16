import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tours', component: ToursComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];