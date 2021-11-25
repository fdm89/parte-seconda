import { Component, OnInit } from '@angular/core';
import { User, gender, role } from '../models/User';
@Component({
  selector: 'parte-seconda-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  users:User[]= [
    {
        id: 3487,
        name: 'Mario',
        surname: 'Rossi',
        age: 25,
        dateOfBirth: '1995-14-12',
        address: {
          city: 'Roma',
          street: 'Via roma 10',
          postalCode: '00100'
        },
        role: role.STAFF,
        username: 'MarioRossi80',
        profilePhotoUrl: 'https://bit.ly/3yRngEP',
        gender: gender.MALE
      },
      {
        id: 12312,
        name: 'Maria',
        surname: 'Rossa',
        age: 26,
        dateOfBirth: '1994-10-11',
        address: {
          city: 'Palermo',
          street: 'Via Palermo 10',
          postalCode: '90100'
        },
        role: role.MANAGER,
        username: 'MariaRossa94',
        profilePhotoUrl: 'https://bit.ly/3DWWxuj',
        gender: gender.FEMALE
      },
      {
        id: 45645,
        name: 'Elis',
        surname: 'Miao',
        age: 5,
        dateOfBirth: '2016-05-08',
        address: {
          city: 'Palermo',
          street: 'Via Palermo 120',
          postalCode: '90100'
        },
        role: role.ADMIN,
        username: 'ElisMiao',
        profilePhotoUrl: 'https://bit.ly/3zU6iH3',
        gender: gender.FEMALE
      }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
