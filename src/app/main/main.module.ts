import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FormDirectiveComponent } from './form-directive/form-directive.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    MainComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    FormBuilderComponent,
    FormDirectiveComponent
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class MainModule {}
