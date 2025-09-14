import { Component } from '@angular/core';
import {CurrencyPipe, NgFor, NgIf} from '@angular/common';


@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [NgFor, CurrencyPipe, NgIf],
  template: `
<h1>Desszertek</h1>
`
})
export class DessertsComponent {
}
