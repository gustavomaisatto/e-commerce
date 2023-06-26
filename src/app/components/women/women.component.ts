import { Component } from '@angular/core';
interface roupa {
  name: string;
  preco: number;
  link: string;
}
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css'],
})
export class WomenComponent {
  arrayItems: roupa[] = [
    {
      name: 'Roupa de frio',
      preco: 50.0,
      link: '../../../assets/roupa1.png',
    },
    {
      name: 'Apollo runing Short',
      preco: 50.0,
      link: '../../../assets/roupa2.svg',
    },
    {
      name: 'Roupa de frio',
      preco: 50.0,
      link: '../../../assets/Roupa3.png',
    },
    {
      name: 'Roupa de frio',
      preco: 50.0,
      link: '../../../assets/roupa1.png',
    },
    {
      name: 'Apollo runing Short',
      preco: 50.0,
      link: '../../../assets/roupa2.svg',
    },
    {
      name: 'Roupa de frio',
      preco: 50.0,
      link: '../../../assets/Roupa3.png',
    },
  ];
  constructor() {}

  olamundo(): void {
    console.log('ola mundo');
  }
}
