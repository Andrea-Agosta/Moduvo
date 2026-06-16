import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero.html',
})
export class HeroSection {
  title = input.required<string>();
  secondLineTitle = input<string>('');
  description = input<string>('');
  imgUrl = input.required<string>();
  imgAlt = input.required<string>();

}
