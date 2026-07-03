import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Bezel',
      description: "A recreation of the BlurAdmin documentation site, built with Angular and Tailwind CSS as a learning project exploring multi-page Angular architecture and documentation-style layouts.",
      image: 'assets/imgs/bezel.png',
      tags: ['Angular', 'TypeScript', 'tailwindcss'],
      githubUrl: 'https://github.com/YoussefWael2028/bezel',
      liveUrl: 'https://bezel-plum.vercel.app/'
    },
    {
      title: 'BlurAdmin',
      description: 'A recreation of the BlurAdmin documentation site, built with Angular and Tailwind CSS as a learning project exploring multi-page Angular architecture and documentation-style layouts.',
      image: 'assets/imgs/blur-admin.png',
      tags: ['Angular', 'TypeScript', 'tailwindcss'],
      githubUrl: 'https://github.com/YoussefWael2028/bluradmin',
      liveUrl: 'https://blur-admin-nine.vercel.app/'
    },
    {
      title: 'Mealify',
      description: 'A modern restaurant website built around clean UI/UX principles, showcasing menu items and a booking flow.',
      image: 'assets/imgs/mealify.png',
      tags: ['HTML5', 'CSS3'],
      githubUrl: 'https://github.com/YoussefWael2028/mealify',
      liveUrl: 'https://mealify-one-fawn.vercel.app/'
    }
  ];
}
