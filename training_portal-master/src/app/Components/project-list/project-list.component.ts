import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../services/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects: any[] = []; // Assuming the structure matches ProjectDto

  constructor(private adminService: AdminserviceService,private router: Router) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.adminService.fetchProjects().subscribe(
      (projects: any[]) => {
        this.projects = projects;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  deleteProject(projectId: number) {
    this.adminService.deleteProject(projectId).subscribe(
      () => {
        // If deletion is successful, remove the project from the UI
      },
      (error) => {
        console.error('Error deleting project:', error);
        // Handle error if needed
        this.fetchProjects();
      }
    );
  }
}
