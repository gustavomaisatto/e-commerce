import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
interface roupa {
  id: number;
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
  productsItems: roupa[] = [];
  constructor(private Products: ProductsService) {}

  ngOnInit(): void {
    this.Products.getAllProducts().subscribe({
      next: (res: any) => {
        this.productsItems = res;
        console.log(res);
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log('request completed.');
      },
    });
  }
  olamundo(): void {
    console.log('ola mundo');
  }
}
