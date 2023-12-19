import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { AddTourComponent } from './add-tour/add-tour.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tours', component: ToursComponent},
    {path: 'addTour', component: AddTourComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];