import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormField } from '../../services/form-field';
import { FormFieldControllerService } from '../../services/form-field-controller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [FormFieldControllerService]
})
export class RegisterComponent {
  title = 'AngularDynamicForms';
  formFields: Observable<FormField<any>[]>;
  constructor(formFieldControllerService: FormFieldControllerService) {
    this.formFields = formFieldControllerService.getFormFields();
  }
}
