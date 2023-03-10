import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormField } from '../../services/form-field';
import { FormFieldControllerService } from '../../services/form-field-controller.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: FormField<string>[] = [];
  form!: UntypedFormGroup;
  payLoad = '';

  constructor(private formFieldControllerService: FormFieldControllerService) { }

  ngOnInit(): void {
    this.form = this.formFieldControllerService.toFormGroup(this.formFields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
