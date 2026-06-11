import { Component, input, signal } from '@angular/core';

import { Product } from '../../../../services/product.model';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.scss',
})
export class ImageGallery {
  product = input<Product>();
  selectedImage = signal<number>(0);

  onSelectedImage(index: number){
    this.selectedImage.set(index)
  }
  
}
