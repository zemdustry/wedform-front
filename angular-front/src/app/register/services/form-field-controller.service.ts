import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map, of } from 'rxjs';
import { FormField } from './form-field';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormFieldControllerService {

  private formFile = 'assets/json/forms.json';

  constructor(private http: HttpClient) { }

  toFormGroup(inputs: FormField<string>[]): UntypedFormGroup {
    const group: any = {};
    if (inputs != null) {
      inputs.forEach(input => {
        let validator: ValidatorFn[] = input.isRequired ? [Validators.required] : [];
        switch (input.validator) {
          case "email":
            validator.push(Validators.email);
            break;
          default:
            break;
        }
        group[input.key] = validator.length > 0 ? new UntypedFormControl(input.value || '', validator)
          : new UntypedFormControl(input.value || '');
      });
    }

    return new UntypedFormGroup(group);
  }



  getFormFields(): Observable<FormField<string>[]> {
    const inputs: FormField<string>[] = [
    new FormField<string>({
      order: 1,
      key: 'name',
      label: 'Name',
      isRequired: true,
      validator: '',
      controlType: 'textbox',
      type: '',
      options: []
    }),
    new FormField<string>({
      order: 2,
      key: 'surname',
      label: 'Surname',
      isRequired: true,
      validator: '',
      controlType: 'textbox',
      type: '',
      options: []
    }),
    new FormField<string>({
      order: 3,
      key: 'phone',
      label: 'Phone',
      isRequired: true,
      validator: 'phone',
      controlType: 'textbox',
      type: 'tel',
      options: []
    }),
    new FormField<string>({
      controlType: 'textbox',
      key: 'email',
      label: 'Email',
      type: 'email',
      isRequired: true,
      validator: 'email',
      order: 4
    }),
    new FormField<string>({
      controlType: 'dropdown',
      key: 'present',
      label: 'Will you be present for our wedding on June 17th?',
      options: [
        {
          key: 'yes',
          value: 'Yes'
        },
        {
          key: 'no',
          value: 'No'
        },
        {
          key: 'maybe',
          value: 'Maybe...'
        }
      ],
      order: 5
    }),
    new FormField<string>({
      controlType: 'textbox',
      key: 'person',
      label: 'How many adults ?',
      type: 'number',
      isRequired: true,
      order: 6
    }),
    new FormField<string>({
      controlType: 'textbox',
      key: 'person',
      label: 'How many childs ?',
      type: 'number',
      isRequired: true,
      order: 7
    }),
    new FormField<string>({
      controlType: 'dropdown',
      key: 'present',
      label: 'When will you arrive at Le Grau du Roi',
      options: [
        {
          key: 'I will already be on site ',
          value: 'already'
        },
        {
          key: 'I will arrive the 17',
          value: 'dday'
        },
        {
          key: 'I will arrive before the 17',
          value: 'before'
        }
      ],
      order: 5
    }),

    new FormField<string>({
      controlType: 'dropdown',
      key: 'present',
      label: 'How will you arrive at Le Grau du Roi',
      options: [
        {
          key: 'By car',
          value: 'car'
        },
        {
          key: 'By train',
          value: 'train'
        },
        {
          key: 'I don\'t know' ,
          value: 'idk'
        }
      ],
      order: 5
    }),

    new FormField<string>({
      controlType: 'dropdown',
      key: 'present',
      label: 'Do you want share your car ?',
      options: [
        {
          key: 'yes',
          value: 'yes'
        },
        {
          key: 'no',
          value: 'no'
        }
      ],
      order: 5
    }),
    new FormField<string>({
      controlType: 'dropdown',
      key: 'alergies',
      label: 'Do you have any alergies or medical treatment ?',
      options: [
        {
          key: 'yes',
          value: 'yes'
        },
        {
          key: 'no',
          value: 'no'
        }
      ],
      order: 5
    }),
    new FormField<string>({
      order: 11,
      key: 'medical',
      label: 'What are your alergies or medical treatments',
      isRequired: true,
      validator: '',
      controlType: 'textbox',
      type: '',
      options: []
    }),
    new FormField<string>({
      controlType: 'dropdown',
      key: 'alergies',
      label: 'Which events will you attend ?',
      options: [
        {
          key: 'Only morning Ceremony in the City Hall of Le Grau du Roi which starts at 11am',
          value: 'Ceremony'
        },
        {
          key: 'Only afternoon Ceremony in the Mas de la Montille – Aigues Morte which starts after 2pm',
          value: 'no'
        },
        {
          key: 'Only reception on the Canal Boat which starts at 6pm',
          value: 'yes'
        },
        {
          key: 'Both Ceremonies only',
          value: 'no'
        },
        {
          key: 'Both Ceremonies and Reception',
          value: 'yes'
        },
        {
          key: 'Morning Ceremony and Reception only',
          value: 'no'
        },
        {
          key: 'Afternoon Ceremony and Reception only',
          value: 'yes'
        }







      ],
      order: 5
    }),
    new FormField<string>({
      controlType: 'radio',
      key: 'sex',
      label: 'Sex',
      type: 'radio',
      options: [
        {
          key: 'male',
          value: 'Male'
        },
        {
          key: 'female',
          value: 'Female'
        }
      ],
      order: 9
    }),
    new FormField<string>({
      controlType: 'textarea',
      key: 'comment',
      label: 'Do you have any comments or recommendations?"',
      type: 'textarea',
      order: 10
    })
    ];
    return of(inputs.sort((a, b) => a.order - b.order));
  }

}
