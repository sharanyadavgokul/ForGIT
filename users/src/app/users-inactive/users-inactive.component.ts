import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-inactive',
  templateUrl: './users-inactive.component.html',
  styleUrls: ['./users-inactive.component.css']
})
export class UsersInactiveComponent implements OnInit {
  users: String[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id:number){
    this.userService.setToActive(id);
  }
}
