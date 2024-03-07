import { Component } from '@angular/core';
import { AdminserviceService } from '../../services/adminservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assigned-training-for-user',
  templateUrl: './assigned-training-for-user.component.html',
  styleUrl: './assigned-training-for-user.component.css'
})
export class AssignedTrainingForUserComponent {

  userId: number;
  assignedTrainings: any[];
 
  constructor(private route: ActivatedRoute, private adminService: AdminserviceService) { }
 
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    
    this.getAssignedTrainings(this.userId);
  }
 
  getAssignedTrainings(id:any) {
    this.adminService.getAssignedTrainings(id).subscribe(
      (data: any[]) => {
        this.assignedTrainings = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  unassignTraining(trainingId: any) {
    this.adminService.unAssignTraining(this.userId, trainingId).subscribe(
      (response) => {
        this.getAssignedTrainings(this.userId);
      }
    )
  }

}
