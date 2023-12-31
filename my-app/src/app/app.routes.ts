import { TourDetailsComponent } from './tour-details/tour-details.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'tours', component: ToursComponent},
    {path: 'addTour', component: AddTourComponent},
    {path: 'tours/details/:id', component: TourDetailsComponent},
    {path: '', redirectTo: '/tours', pathMatch: 'full'}
];