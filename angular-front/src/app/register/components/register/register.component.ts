import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { GuestCompletionService } from 'src/app/shared/services/guest/guest-completion.service';
import { Child } from 'src/app/shared/services/guest/models/child';
import { GuestCompletion } from 'src/app/shared/services/guest/models/guest-completion';
import { Person } from 'src/app/shared/services/guest/models/person';
import { arrivalOptions, attendOptions, eventOptions, transportOptions, musicOptions, yesNoOption } from './options';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public guestForm = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,
      Validators.min(1),
      Validators.max(50)]),
    surname: new FormControl(undefined, [
      Validators.required,
      Validators.min(1),
      Validators.max(50)
    ]),
    phone: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    attend: new FormControl(undefined, [Validators.required]),
    people: new FormControl(0, [Validators.required]),
    peopleFormArray: new FormArray([]),
    children: new FormControl(0, [Validators.required]),
    childFormArray: new FormArray([]),
    arrival: new FormControl(undefined, [Validators.required]),
    transportation: new FormControl(undefined, [Validators.required]),
    from: new FormControl(undefined, [Validators.required]),
    transportShare: new FormControl(),
    event: new FormControl(undefined, [Validators.required]),
    dietary: new FormControl(undefined, [Validators.required]),
    dietaryDetail: new FormControl(undefined, [
      Validators.min(0),
      Validators.max(280)
    ]),
    song: new FormControl(undefined, [
      Validators.min(0),
      Validators.max(100)
    ]),
    brunch: new FormControl(undefined, [Validators.required]),
    comment: new FormControl(undefined, [
      Validators.min(0),
      Validators.max(280)
    ])
  });

  // select inputs
  public attendOptions = attendOptions;
  public arrivalOptions = arrivalOptions;
  public transportOptions = transportOptions;
  public eventOptions = eventOptions;
  public musicOptions = musicOptions;
  public yesNoOption = yesNoOption;

  // phone input
  public preferredCountries: CountryISO[] = [CountryISO.France, CountryISO.CzechRepublic, CountryISO.Vietnam, CountryISO.UnitedKingdom];
  public separateDialCode = false;
  public SearchCountryField = SearchCountryField;
  public CountryISO = CountryISO;
  public PhoneNumberFormat = PhoneNumberFormat;

  private peopleFormName: string = 'peopleFormArray';
  public numberOfPeople: number = 0;
  public numberOfChildren: number = 0;
  public willAttend: boolean = true;
  public transportation: string;
  public willShareTransportation: boolean;
  public hasDietary: boolean;
  public willBrunch: boolean;
  public isSubmitted: boolean = false;
  public hasError: boolean = false;
  public songError: boolean = false;
  public songs: string[] = [];

  constructor(private guestCompletionService: GuestCompletionService) {
    this.guestForm.get('attend').valueChanges.subscribe(value => {
      this.willAttend = value == "no" ? false : true;
    });
    this.guestForm.get('people').valueChanges.subscribe(peopleCount => this.manageFormArray(peopleCount, 'peopleFormArray'));
    this.guestForm.get('children').valueChanges.subscribe(childrenCount => this.manageFormArray(childrenCount, 'childFormArray'));
    this.guestForm.get('transportation').valueChanges.subscribe(transport => this.transportation = transport);
    this.guestForm.get('transportShare').valueChanges.subscribe(transportShare => this.willShareTransportation = transportShare == 'yes' ? true : false);
    this.guestForm.get('dietary').valueChanges.subscribe(dietary => this.hasDietary = dietary == 'yes' ? true : false);
    this.guestForm.get('brunch').valueChanges.subscribe(brunch => this.willBrunch = brunch == 'yes' ? true : false);
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  manageFormArray(currentCount: number, formArrayName: string) {
    const previousCount: number = formArrayName == this.peopleFormName
      ? this.numberOfPeople
      : this.numberOfChildren;

    const formArray = this.guestForm.get(formArrayName) as FormArray;

    if (previousCount <= currentCount) {
      const formGroupFunction = formArrayName == this.peopleFormName
        ? () => this.newPeopleFormGroup()
        : () => this.newChildrenFormGroup();

      for (let index = previousCount; index < currentCount; index++) {
        formArray.push(formGroupFunction());
      }

    } else {
      for (let index = previousCount; index > currentCount; index--) {
        formArray.removeAt(index - 1);
      }
    }

    const newCount = currentCount >= 1 ? currentCount : 0;
    if (formArrayName == this.peopleFormName) {
      this.numberOfPeople = newCount;
    } else {
      this.numberOfChildren = newCount;
    }
  }

  newPeopleFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ]),
      surname: new FormControl(undefined, [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ])
    });
  }

  newChildrenFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ]),
      age: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^-?\d+$/),
        Validators.min(0),
        Validators.max(99)
      ])
    });
  }

  addSong() {
    const songValue = this.guestForm.get('song').value;
    if (songValue !== null && songValue !== '' && songValue.length <= 100) {
      this.songError = false;
      if (this.songs.length >= 10) {
        this.songs.pop();
      }
      this.songs.push(songValue);
      this.guestForm.get('song').reset();
    } else {
      this.songError = true;
    }
  }

  removeSong(song: string) {
    const indexToRemove = this.songs.indexOf(song);
    if (indexToRemove > -1) {
      this.songs.splice(indexToRemove, 1);
    }
  }

  dietaryDetailIsValid() {
    const dietaryDetailControl = this.guestForm.get('dietaryDetail');
    if (dietaryDetailControl.value != null) {
      return dietaryDetailControl.valid;
    }
    return true;
  }

  commentIsValid() {
    const commentControl = this.guestForm.get('comment');
    if (commentControl.value != null) {
      return commentControl.valid;
    }
    return true;
  }

  onFormSubmit(): void {
    this.guestForm.markAllAsTouched();
    this.isSubmitted = true;

    if (this.guestForm instanceof FormGroup && this.guestForm.valid) {
      this.hasError = false;
      const guest: GuestCompletion = this.createCompletedGuest();
      console.log(guest);
      this.guestCompletionService.addGuestCompletion(guest).subscribe({
        next: () => console.log('Guest added successfully'),
        error: () => console.error('Error adding guest')
      });
    } else {
      console.error('####################')
      this.hasError = true;
      Object.keys(this.guestForm.controls).forEach(key => {
        const controlErrors = this.guestForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log(`Invalid control: ${key}, ${keyError}: ${controlErrors[keyError]}`);
          });
        }
      });
    }
  }

  createCompletedGuest(): GuestCompletion {
    const formValues = this.guestForm.value;
    return {
      name: formValues.name,
      surname: formValues.surname,
      phone: formValues.phone,
      email: formValues.email,
      attend: formValues.attend,
      peopleCount: formValues.people,
      people: this.getPeople(),
      childrenCount: formValues.children,
      children: this.getChildren(),
      arrival: formValues.arrival,
      transportation: formValues.transportation,
      from: formValues.from,
      transportShare: this.willShareTransportation,
      event: formValues.event,
      dietary: this.hasDietary,
      dietaryDetail: formValues.dietaryDetail,
      songs: this.songs,
      brunch: this.willBrunch,
      comment: formValues.comment
    } as GuestCompletion;
  }

  getPeople(): Person[] {
    const formValues = this.guestForm.value;
    if (formValues.peopleFormArray != null) {
      return formValues.peopleFormArray.map((control: any) => {
        const name: string = control.name;
        const surname: string = control.surname;
        return { name, surname };
      });
    }
    return [];
  }

  getChildren(): Child[] {
    const formValues = this.guestForm.value;
    if (formValues.childFormArray != null) {
      return formValues.childFormArray.map((control: any) => {
        const name: string = control.name;
        const age: number = control.age;
        return { name, age };
      });
    }
    return [];
  }
}
