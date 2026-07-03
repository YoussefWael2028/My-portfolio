import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
