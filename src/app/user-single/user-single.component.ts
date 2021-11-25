import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User,gender,role } from '../models/User';

@Component({
  selector: 'parte-seconda-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
@Input() user!:User
@Output() showdetail = new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
  }

}
