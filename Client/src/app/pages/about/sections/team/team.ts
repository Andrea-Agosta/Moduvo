import { Component } from '@angular/core';

interface ITeam {
  name: string
  role: string
  image: string
  description: string
}

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  team: ITeam[] = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1661248863151-63d8ee0dac95?w=300&h=300&fit=crop&crop=face",
      description: "Interior designer with 20+ years of experience in luxury furniture."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Architect turned furniture designer, passionate about modern aesthetics."
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Dedicated to ensuring every customer finds their perfect furniture match."
    }
  ];
}
