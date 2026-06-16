import { Component } from '@angular/core';

import { HeroSection } from "../../components/sharedSections/hero/hero";
import { Button } from "../../components/ui/button/button";
import { Values } from "./sections/values/values";
import { Story } from "./sections/story/story";
import { Team } from "./sections/team/team";
import { Contacts } from "./sections/contacts/contacts";

@Component({
  selector: 'app-about',
  imports: [HeroSection, Button, Values, Story, Team, Contacts],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  // TODO: fetch this data from backend after implementation
  title = "Crafting Beautiful Homes"
  secondLineTitle = "Since 1998"
  description = "At Moduvo, we believe that furniture is more than just functional pieces – they're the foundation of memories, comfort, and style in your home."
  imgUrl = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
  imgAlt = "Beautiful living room"

}
