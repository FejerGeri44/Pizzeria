import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

export type Pizza = {
  id: string;
  name: string;
  image: string;
  desc: string;
  price: number;
  tags?: string[];
  vegetarian?: boolean;
  spiceLevel: 0 | 1 | 2 | 3 | 4 | 5;
};

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgForOf,
    CurrencyPipe,
    RouterLink,
    NgClass
  ],
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent {
  @Input({ required: true }) pizza!: Pizza;
  @Input() currencyCode: string = 'USD';
  @Output() addToCart = new EventEmitter<Pizza>();

  readonly spiceMarks = [1,2,3,4,5];
  readonly spiceLabel  = ['Not spicy', 'Mild', 'Mild+', 'Medium', 'Hot', 'Inferno'];
}
