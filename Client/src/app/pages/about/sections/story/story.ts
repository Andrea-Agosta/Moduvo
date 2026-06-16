import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.html',
  styleUrl: './story.scss',
})
export class Story {
  readonly storyData = {
    title: 'Our Story',
    paragraphs: [
      `What started as a small family workshop in 1998 has grown into one of the most trusted 
        names in furniture retail. Our founder, Sarah Johnson, began with a simple mission: 
        to make beautiful, quality furniture accessible to everyone.`,
      `Today, we work with skilled craftsmen and designers from around the world to bring you 
        pieces that combine traditional craftsmanship with modern design. Every item in our 
        collection is chosen for its quality, style, and ability to transform your living space.`,
      `We're not just selling furniture – we're helping you create a home that reflects your 
        personality and supports your lifestyle.`
    ],
  }
}
