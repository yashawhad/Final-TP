import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  adminData: any;

  constructor(private route: ActivatedRoute,private adminService:AdminserviceService){

  }
 
  initAdminData(){

    let adminId=localStorage.getItem("adminId");
    this.adminService.getAdminById(parseInt(adminId!)).subscribe(data=>{
      this.adminData=data
      console.log("ddddddd ",data)
    });


 }
  ngOnInit(): void {
    //Retrieve user data from route parameters
    this.initAdminData();
    this.route.paramMap.subscribe(params => {
      this.adminData = JSON.parse(params.get('adminData') || '{}');
      console.log(this.adminData);
    });
  }
}
