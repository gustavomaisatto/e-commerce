import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SelectedLinkService {
  activeRoute: any = this.activatedRoute?.snapshot?.routeConfig?.path;
  constructor(private activatedRoute: ActivatedRoute) {}
  getRouter(): string {
    console.log(this.activeRoute);
    return this.activeRoute;
  }
}
