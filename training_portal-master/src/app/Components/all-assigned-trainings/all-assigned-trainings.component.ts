import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../services/adminservice.service';


interface AssignedTraining {
  trainingId: number;
  trainingName: string;
}
 
interface AssignedTrainingsData {
   username: string;
  trainings: AssignedTraining[];
}
@Component({
  selector: 'app-all-assigned-trainings',
  templateUrl: './all-assigned-trainings.component.html',
  styleUrl: './all-assigned-trainings.component.css'
})


export class AllAssignedTrainingsComponent implements OnInit{

  assignedTrainings: AssignedTrainingsData[] = [];
 
  constructor(private adminService: AdminserviceService) { }

  ngOnInit(): void {
    this.fetchAssignedTrainings();
  }
 
  fetchAssignedTrainings() {
    this.adminService.getAllAssignedTrainings().subscribe(
      (data: any) => {
        // Convert object to array
         this.assignedTrainings = Object.entries(data).map(([username, trainings]) => ({ username, trainings: trainings as AssignedTraining[] }));
       
      },
      (error) => {
        console.error('Error fetching assigned trainings:', error);
      }
    );
  }


}
