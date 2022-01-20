import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormDirectiveComponent } from './form-directive/form-directive.component';
import { MainComponent } from './main.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-directive', component: FormDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
