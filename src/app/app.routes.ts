import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: PizzaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
