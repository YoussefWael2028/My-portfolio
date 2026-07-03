import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
experiences = [
  {
    dateRange: '2022 — Present',
    title: 'Student',
    org: 'Higher Institute of Engineering and Technology',
    description: 'Pursuing a degree with a focus on full-stack web development, while specializing personally in frontend technologies and modern UI/UX practices.',
    tags: ['HTML5', 'CSS3', 'JavaScript',]
  },
  {
    dateRange: '2022 — 2023',
    title: 'Programming Fundamentals Diploma',
    org: 'Route Academy',
    description: 'Built a foundation in core programming concepts and problem-solving, preparing for more advanced frontend and full-stack coursework.',
    tags: ['JavaScript', 'Problem Solving']
  },
  {
    dateRange: '2024 — 2025',
    title: 'Frontend Web Development Diploma',
    org: 'Route Academy',
    description: 'Completed an intensive diploma covering frontend web development, with hands-on project work in Angular , TypeScript and more.',
    tags: ['HTML5', 'CSS3', 'JavaScript','Angular', 'TypeScript']
  },

];
}
