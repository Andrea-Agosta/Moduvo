import { Component } from '@angular/core';

import { FilterSidebar } from "./sections/filter-sidebar/filter-sidebar";
import { ProductsGrid } from "./sections/products-grid/products-grid";
import { Pagination } from '../../components/ui/pagination/pagination';

@Component({
  selector: 'app-products',
  imports: [FilterSidebar, ProductsGrid, Pagination],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

}
