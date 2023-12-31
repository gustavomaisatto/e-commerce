import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/women', pathMatch: 'full' },
  { path: 'women', component: PageComponent },
  { path: 'men', component: PageComponent },
  { path: 'kids', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
