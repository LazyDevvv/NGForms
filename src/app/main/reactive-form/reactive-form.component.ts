import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  dynamicForms!: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileForms();
  }

  profileForms() {
    this.dynamicForms = this.fb.group({
      profile: this.fb.array([
        this.fb.group({
          firstName: [''],
          lastName: [''],
          address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
          }),
          phone: this.fb.array([]),
        })
      ])
    });
  }


  getControls(): FormArray {
    return this.dynamicForms.get('profile') as FormArray;
  }

  addPhoneNumber(empIndex: number) {
    this.addPhone(empIndex).push(this.phoneNumberOptions());
  }

  addPhone(i: number): FormArray {
    return this.getControls()
      .at(i)
      .get('phone') as FormArray;
  }

  phoneNumberOptions(): FormControl {
    return this.fb.control('');
  }

}
