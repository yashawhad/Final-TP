import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { UserServiceService } from '../../services/userservice.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  
userData: any;
route: any;

constructor(private router: Router,private userService:UserServiceService) {
const navigation = this.router.getCurrentNavigation?.();
if (navigation?.extras.state) {
  this.userData = navigation.extras.state['userData'];
}
}
initUserData(){
  let data=localStorage.getItem("userId");

  let uData=this.userService.getUserDataById(parseInt(data!)).subscribe(da=> {
     this.userData=da
  });
 
}
ngOnInit(): void {
  console.log("userId ",localStorage.getItem("userId"));
  this.initUserData();
}

logout(){
  localStorage.removeItem("userId");
  this.router.navigate([''])
}




}