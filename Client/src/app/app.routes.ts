import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Deals } from './pages/deals/deals';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'products', component: Products },
    { path: 'products/deals', component: Deals },
    { path: 'products/:id', component: ProductDetail },
];
