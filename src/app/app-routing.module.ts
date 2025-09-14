import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {PizzaComponent} from './pages/pizza/pizza.component';
import {HomeComponent} from './pages/home/home.component';
import {Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: PizzaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
