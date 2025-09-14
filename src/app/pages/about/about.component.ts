import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

interface Stat {
  num: string;
  caption: string;
}

interface AboutCard {
  id: string;
  icon: string;
  label: string;
  title: string;
  level?: 'h2' | 'h3';
  text: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [
    RouterLink,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats: Stat[] = [
    { num: '25k+',  caption: 'Pizzas served' },
    { num: '48 hrs', caption: 'Dough fermentation' },
    { num: '4.8★',   caption: 'Average rating' },
  ];

  cards: AboutCard[] = [
    {
      id: 'stand-for',
      icon: 'fa-solid fa-award',
      label: 'What We Stand For',
      title: 'Quality you can taste in every slice.',
      level: 'h2',
      text:
        'From our 48-hour cold-fermented dough to vine-ripened tomatoes and locally sourced ' +
        'toppings, we obsess over details so your pizza arrives light, crispy, and full of flavor.',
    },
    {
      id: 'kitchen',
      icon: 'fa-solid fa-pizza-slice',
      label: 'Our Kitchen',
      title: 'Hand-tossed. Stone-baked. Always fresh.',
      level: 'h3',
      text:
        'We stretch each base by hand, brush it with extra-virgin olive oil, and finish it in a ' +
        'high-heat oven for those signature blistered edges and chewy centers.',
    },
    {
      id: 'mission',
      icon: 'fa-solid fa-heart',
      label: 'Our Mission',
      title: 'Make people happy with pizza.',
      level: 'h3',
      text:
        'Whether it’s a quick lunch or a late-night bite, we aim to deliver friendly service, ' +
        'consistent quality, and flavors that keep you coming back.',
    },
    {
      id: 'vision',
      icon: 'fa-solid fa-people-group',
      label: 'Our Vision',
      title: 'A community hub for great food and good vibes.',
      level: 'h3',
      text:
        'Joy Slice is more than a pizzeria, it’s a place to gather, celebrate, and share ' +
        'moments over hot, cheesy goodness.',
    },
  ];

  trackByIndex = (_: number, __: unknown) => _;
  trackById = (_: number, item: AboutCard) => item.id;
}
