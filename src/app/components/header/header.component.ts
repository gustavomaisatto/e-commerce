import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  listNav: string[] = ['Women', 'Men', 'Kids'];
  safeReturnUrl: SafeResourceUrl | undefined;
  safeVectorUrl: SafeResourceUrl | undefined;
  safeEmptyCartUrl: SafeResourceUrl | undefined;
  constructor(private sanitizer: DomSanitizer) {}
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
  }
}
