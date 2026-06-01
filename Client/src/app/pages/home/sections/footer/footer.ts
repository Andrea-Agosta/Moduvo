import { Component } from '@angular/core';

type FooterSection = {
  sectionsName: string
  sectionsOptions: string[]
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerSections: FooterSection[] = [
    {
      sectionsName: "Quick Links",
      sectionsOptions: ["About Us", "Contact", "Shipping Info", "Returns"]
    },
    {
      sectionsName: "Categories",
      sectionsOptions: ["Living Room", "Bedroom", "Dining Room", "Office"]
    },
    {
      sectionsName: "Customer Service",
      sectionsOptions: ["Help Center", "Track Order", "Report Problem", "Live Chat"]
    }
  ]

}
