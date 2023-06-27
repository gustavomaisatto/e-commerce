import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './components/women/women.component';

const routes: Routes = [
  { path: '', redirectTo: '/women', pathMatch: 'full' },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: WomenComponent },
  { path: 'kids', component: WomenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
