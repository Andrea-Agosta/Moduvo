import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Deals } from './pages/deals/deals';
import { About } from './pages/about/about';
import { Categories } from './pages/categories/categories';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'products', component: Products },
    { path: 'products/deals', component: Deals },
    { path: 'products/:id', component: ProductDetail },
    { path: 'categories', component: Categories },
    { path: 'about', component: About },
];
