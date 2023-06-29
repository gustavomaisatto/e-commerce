import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products.service';
import { SelectedLinkService } from 'src/app/services/selected-link.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listNav: string[] = ['women', 'men', 'kids'];
  openCartBool: boolean = false;
  safeReturnUrl: SafeResourceUrl | undefined;
  safeVectorUrl: SafeResourceUrl | undefined;
  safeEmptyCartUrl: SafeResourceUrl | undefined;
  listProducts: any[] = [];
  cartItemCount: number = 0;
  constructor(
    private sanitizer: DomSanitizer,
    private products: ProductsService,
    private selectedLinkService: SelectedLinkService
  ) {}
  ngOnInit(): void {
    const returnUrl = '../../../assets/return.svg'; // Caminho relativo para a imagem
    const vectorUrl = '../../../assets/Vector.svg'; // Caminho relativo para a imagem
    const cartUrl = '../../../assets/EmptyCart.svg'; // Caminho relativo para a imagem
    // Sanitize a URL da imagem
    this.safeReturnUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(returnUrl);
    this.safeVectorUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(vectorUrl);
    this.safeEmptyCartUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(cartUrl);
    this.products.cartItemsUpdated.subscribe((items) => {
      this.cartItemCount = items.length;
      this.listProducts = items;
    });
  }
  openCart(): void {
    this.openCartBool = !this.openCartBool;
  }
}
