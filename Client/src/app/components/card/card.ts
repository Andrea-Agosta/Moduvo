import { Component, input, computed, booleanAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideStar } from '@lucide/angular';

@Component({
  selector: 'app-card',
  imports: [RouterLink, LucideStar],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  imgUrl = input<string | undefined>();
  overline = input<string | undefined>();
  title = input<string | undefined>();
  description = input<string | undefined>();
  linkUrl =  input<string | undefined>();
  rating = input<number | undefined>();
  reviews = input<number | undefined>();
}
