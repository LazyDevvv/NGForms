import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Profile } from 'src/app/model/profile';

@Component({
  selector: 'app-form-directive',
  templateUrl: './form-directive.component.html',
  styleUrls: ['./form-directive.component.scss']
})
export class FormDirectiveComponent implements OnInit {

  addresses: Address = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };

  profile: Profile = {
    id: 0,
    firstName: '',
    lastName: '',
    address: this.addresses,
    phone: ['']
  }


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profile);
  }

}


