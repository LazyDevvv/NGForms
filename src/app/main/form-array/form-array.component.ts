import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  form!: FormGroup;
  isPowerAdded: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      characters: this.fb.array([this.newCharacter()])
    });
  }

  characters() {
    return this.form?.get('characters') as FormArray;
  }

  newCharacter(): FormGroup {
    return this.fb.group({
      name: '',
      nickname: '',
      power: this.fb.array([
        this.newPower()
      ])
    });
  }

  newPower(): FormGroup {
    return this.fb.group({
      powerName: '',
    });
  }

  addCharacter() {
    this.characters().push(this.newCharacter());
  }

  removeCharacter(i: number) {
    this.characters().removeAt(i);
  }

  characterPower(i: number): FormArray {
    return this.characters().at(i).get('power') as FormArray;
  }

  addCharacterPower(charIndex: number) {
    this.characterPower(charIndex).push(this.newPower());
  }

  removeCharacterPower(charIndex: number, powerIndex: number) {
    this.characterPower(charIndex).removeAt(powerIndex);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}


// export interface Character {
//   name: string;
//   nickname: string;
//   weapon: string;
//   power: string[];
// }
