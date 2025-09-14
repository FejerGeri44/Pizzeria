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
      tags: ['Hot & Spicy', 'Best Seller', 'Crowd Pleaser', 'Hand-Tossed', 'Extra Pepperoni'],
      spiceLevel: 2,
    },
    {
      id: 'margherita',
      name: 'Margherita Pizza',
      image: 'pizzas/margherita.png',
      desc:
        'Crushed tomatoes, silky mozzarella, and fresh basil on a light, airy crust, finished with extra-virgin olive oil.',
      price: 12.49,
      tags: ['Classic', 'Light & Fresh', 'Neapolitan Style', 'Basil Lovers', 'Vegetarian'],
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
      tags: ['Customer Favorite', 'Umami Rich', 'Garlic Lovers', 'Herb-Infused', 'Vegetarian'],
      vegetarian: true,
      spiceLevel: 0,
    },
    {
      id: 'cheesy',
      name: 'Cheese Pizza',
      image: 'pizzas/cheesy.png',
      desc:
        'A timeless classic with golden mozzarella over rich tomato sauce and a crispy crust.',
      price: 9.99,
      tags: ['Classic', 'Extra Cheese', 'Kid Friendly', 'Budget Pick', 'Vegetarian'],
      vegetarian: true,
      spiceLevel: 0,
    },
    {
      id: 'hawaii',
      name: 'Hawaiian Pizza',
      image: 'pizzas/hawaii.png',
      desc:
        'Sweet pineapple and savory ham combined with melted cheese on a tomato base.',
      price: 12.49,
      tags: ['Tropical Favorite', 'Sweet & Savory', 'Pineapple Lovers', 'Family Favorite', 'Smoky Ham'],
      vegetarian: false,
      spiceLevel: 0,
    },
    {
      id: 'meatlover',
      name: 'Meat Lover Pizza',
      image: 'pizzas/meatLover.png',
      desc:
        'Loaded with pepperoni, bacon, sausage, and ham, balanced with fresh veggies and cheese.',
      price: 14.99,
      tags: ['Hearty Choice', 'Protein Packed', 'Game Day', 'Carnivore Pick', 'Crowd Pleaser'],
      vegetarian: false,
      spiceLevel: 4,
    },
    {
      id: 'seafood',
      name: 'Seafood Pizza',
      image: 'pizzas/seafood.png',
      desc:
        'Juicy shrimp, mussels, and cherry tomatoes baked with garlic, parsley, and mozzarella.',
      price: 15.99,
      tags: ['Specialty', 'Ocean Fresh', 'Chef’s Choice', 'Garlic Lovers', 'Premium'],
      vegetarian: false,
      spiceLevel: 1,
    },
  ];

  trackById = (_: number, pizza: Pizza) => pizza.id;
}
