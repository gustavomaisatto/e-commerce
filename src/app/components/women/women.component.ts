import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { SelectedLinkService } from 'src/app/services/selected-link.service';
import { Router } from '@angular/router';
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
  selectedLink: string = 'women';
  productsItems: roupa[] = [];
  currentUrl = this.router.url;
  routeParts = this.currentUrl.split('/');
  activeRoute = this.routeParts[this.routeParts.length - 1] || 'women';
  constructor(
    private Products: ProductsService,
    private selectedLinkService: SelectedLinkService,
    private router: Router
  ) {}

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
    this.Products.loadCart();
  }
  olamundo(): void {
    console.log('ola mundo');
  }
  addToCart(product: roupa) {
    this.Products.loadCart();
    this.Products.addToCart(product);
  }
}
