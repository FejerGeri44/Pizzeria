import {AfterViewInit, Component, computed, ElementRef, signal, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

type Pizza = {
  name: string;
  tag: string;
  desc: string;
  image: string;
  price: number;
  special: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf, CurrencyPipe, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeToggle', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;
  openedIndex = 0;
  readonly selectedIndex = signal(1);
  readonly selectedPizza = computed(() => this.pizzas()[this.selectedIndex()] ?? null);
  trackByName = (_: number, p: Pizza) => p.name;

  readonly pizzas = signal<Pizza[]>([
    {
      name: 'Pepperoni Pizza',
      tag: 'Hot & Spicy',
      special: 'Hot',
      price: 15.99,
      image: 'pizzas/pepperoni.png',
      desc:
        'Spicy pepperoni cups that crisp at the edges over a creamy mozzarella blend and a bright, slow-simmered tomato sauce, all on hand-tossed dough fermented for deep flavor and baked to a blistered crunch.',
    },
    {
      name: 'Margherita Pizza',
      tag: 'Today’s Special',
      special: 'Classic',
      price: 17.99,
      image: 'pizzas/margherita.png',
      desc:
        'Crushed tomatoes and silky mozzarella on a light, airy crust, finished with fresh basil and a drizzle of extra-virgin olive oil—simple ingredients layered for a clean, fragrant, distinctly Italian bite.',
    },
    {
      name: 'Mushroom Pizza',
      tag: 'Customer Favorite',
      special: 'Favourite',
      price: 19.99,
      image: 'pizzas/mushroom.png',
      desc:
        'A medley of mushrooms sautéed with garlic and thyme, scattered over mozzarella and finished with fresh parsley and a touch of black pepper for a savory, earthy slice with a delicate crunch.',
    },
  ]);
  blogs = [
    {
      title: 'Pizza Trends in 2025',
      date: 'September 1, 2025 · 5 min read',
      img: 'blogs/blog1.jpg',
    },
    {
      title: 'The Evolution of Cheese on Pizza',
      date: 'September 10, 2025 · 6 min read',
      img: 'blogs/blog2.jpg',
    },
    {
      title: 'The Importance of Fresh Ingredients',
      date: 'September 12, 2025 · 8 min read',
      img: 'blogs/blog3.jpg',
    },
    {
      title: 'Pizza Culture Around the World',
      date: 'September 15, 2025 · 7 min read',
      img: 'blogs/blog4.jpg',
    },
  ];

  faqs = [
    {
      question: 'Where does your oven come from?',
      answer: 'Our oven comes directly from Naples, handcrafted by Italian artisans.',
    },
    {
      question: 'Where do you source your ingredients?',
      answer: 'We source most ingredients from local small producers, supporting the local economy.',
    },
    {
      question: 'What kind of coffee do you use?',
      answer: 'We get freshly roasted coffee from a Budapest artisan roaster, with decaf available on request.',
    },
    {
      question: 'Do you offer gluten-free pizza?',
      answer: 'Yes, we offer a gluten-free option—please let us know when ordering!',
    },
  ];

  selectPizza(index: number) {
    this.selectedIndex.set(index);
  }

  ngAfterViewInit() {
    const container = this.sliderContainer.nativeElement as HTMLElement;
    let scrollAmount = 0;

    const scrollSpeed = 0.3;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      container.scrollLeft = scrollAmount;

      const maxScroll =
        container.scrollWidth / 2;

      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }

  toggleFAQ(index: number): void {
    this.openedIndex = this.openedIndex === index ? -1 : index;
  }
}
