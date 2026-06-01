import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button } from '../../../../components/button/button'

@Component({
  selector: 'app-hero-section',
  imports: [Button, RouterLink],
  templateUrl: './hero.html',
})
export class HeroSection {

}
