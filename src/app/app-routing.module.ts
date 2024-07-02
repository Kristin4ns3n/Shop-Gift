import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      /*
      {
        path: 'cart',
        loadComponent: () => import('./home/cart/cart.page').then(m => m.CartPage)
      },
      */
      {
        path: 'gifts/:id',
        children: [
          {
            path: '',
            loadComponent: () => import('./home/item-detail/item-detail.page').then(m => m.ItemDetailPage)
          }, /*
          {
            path: 'cart',
            loadComponent: () => import('./home/cart/cart.page').then(m => m.CartPage)
          }, */
        ], /* Close tag of path/gifts/children */
      },
    ],  /* Close tag of path/home/children */
  },   /* Close tag of Routes */
   

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
