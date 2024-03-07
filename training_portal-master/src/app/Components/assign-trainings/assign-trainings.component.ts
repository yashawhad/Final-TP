import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-trainings',
  templateUrl: './assign-trainings.component.html',
  styleUrl: './assign-trainings.component.css'
})
export class AssignTrainingsComponent {
  assignedTrainings: any[] = [];
  errorLoadingTrainings: boolean = false;
  isEnrolled: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAssignedTrainings();
  }

  getAssignedTrainings(): void {
    this.http.get<any[]>('http://localhost:8080/users/allassigntrainingtouser')
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.assignedTrainings = data;
          let userId: number = parseInt(localStorage.getItem("userId")!);
          let temp = data.filter((temp) => temp.user.id === userId);
          this.assignedTrainings = temp.map(training => ({
            ...training,
            action: training.isEnrolled ? 'Enrolled' : 'Enroll'
          }));

        },
        (error) => {
          console.error('Error fetching assigned trainings:', error);
          this.errorLoadingTrainings = true;
        }
      );
  }
  enroll(training: any): void {
    console.log('Enrolling to training:', training);
    training.isEnrolled = true;
    training.action = 'Enrolled';
  }
  logout() {
    localStorage.removeItem("userId");
    this.router.navigate([''])
  }
}
