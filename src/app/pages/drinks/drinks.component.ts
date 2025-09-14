import { Component } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  template: ``

})
export class DrinksComponent {

}
