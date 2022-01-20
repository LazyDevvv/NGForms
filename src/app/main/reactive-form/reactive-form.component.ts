import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';
import { Profile } from './../../model/profile';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  forms!: FormGroup;

  profileForms = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    phone: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit() {
    this.forms = this.fb.group({
      profile: this.fb.array([
        this.profileForms
      ]),
    })

  }

  get profile() {
    return this.forms.get('profile') as FormArray;
  }

  get address() {
    return this.forms.get('address') as FormGroup;
  }

  get phone() {
    return this.forms.get('phone') as FormArray;
  }

  createProfile(): Profile {
    return {
      id: this.forms.get('id')?.value,
      firstName: this.forms.get('firstName')?.value,
      lastName: this.forms.get('lastName')?.value,
      address: this.forms.get('address')?.value,
      phone: this.forms.get('phone')?.value
    }
  }

  onSubmit() {
    const profiles = this.createProfile();
    this.profileService.save(profiles).subscribe(
      data => console.log(data),
    )
  }



  addPhone() {
    this.phone.push(this.fb.control(''));
  }

}
