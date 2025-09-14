import { Component } from '@angular/core';
import {Pizza, PizzaCardComponent} from '../../components/pizza-card/pizza-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './pizza.component.html',
  standalone: true,
  imports: [
    PizzaCardComponent,
    NgForOf
  ],
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  currencyCode = 'USD';

  pizzas: Pizza[] = [
    {
      id: 'pepperoni',
      name: 'Pepperoni Pizza',
      image: 'pizzas/pepperoni.png',
      desc:
        'Spicy pepperoni cups over creamy mozzarella and a bright, slow-simmered tomato sauce on hand-tossed dough baked to a blistered crunch.',
      price: 14.99,
      tags: ['Hot & Spicy', 'Best Seller'],
      spiceLevel: 2,
    },
    {
      id: 'margherita',
      name: 'Margherita Pizza',
      image: 'pizzas/margherita.png',
      desc:
        'Crushed tomatoes, silky mozzarella, and fresh basil on a light, airy crust, finished with extra-virgin olive oil.',
      price: 12.49,
      tags: ['Classic'],
      vegetarian: true,
      spiceLevel: 0,
    },
    {
      id: 'mushroom',
      name: 'Mushroom Pizza',
      image: 'pizzas/mushroom.png',
      desc:
        'A medley of mushrooms sautéed with garlic and thyme, scattered over mozzarella and finished with parsley and black pepper.',
      price: 13.49,
      tags: ['Customer Favorite'],
      vegetarian: true,
      spiceLevel: 0,
    },
  ];

  trackById = (_: number, pizza: Pizza) => pizza.id;
}
