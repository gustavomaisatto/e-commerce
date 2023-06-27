import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
interface roupa {
  id: number;
  name: string;
  preco: number;
  link: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartItemsUpdated: Subject<roupa[]> = new Subject<roupa[]>();
  products: any[] = [];
  constructor(private http: HttpClient) {
    this.loadCart();
  }

  getAllProducts() {
    return this.http.get('../../assets/data.json');
  }
  getProduct() {
    return this.products;
  }
  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }
  addToCart(addedProduct: roupa) {
    this.products.push(addedProduct);
    this.saveCart();
    this.cartItemsUpdated.next(this.products);
  }
  loadCart() {
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
    this.cartItemsUpdated.next(this.products);
  }

  productInCart(product: roupa) {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }
  removeProduct(product: roupa) {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
      this.cartItemsUpdated.next(this.products);
    }
  }
  clearProducts() {
    localStorage.clear();
    this.cartItemsUpdated.next(this.products);
  }
}
