import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { NGXLogger } from 'ngx-logger';
import { GuestService } from 'src/app/shared/services/guest/guest.service';
import { Child } from 'src/app/shared/services/guest/models/child';
import { Guest } from 'src/app/shared/services/guest/models/guest';
import { Person } from 'src/app/shared/services/guest/models/person';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public guestForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(50)]),
    surname: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(50)
    ]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    attend: new FormControl('yes', [Validators.required]),
    people: new FormControl(0, [Validators.required]),
    peopleFormArray: new FormArray([]),
    children: new FormControl(0, [Validators.required]),
    childFormArray: new FormArray([]),
    arrival: new FormControl(null, [Validators.required]),
    transportation: new FormControl(null, [Validators.required]),
    from: new FormControl(null, [Validators.required]),
    transportShare: new FormControl(null),
    event: new FormControl(null, [Validators.required]),
    dietary: new FormControl(null, [Validators.required]),
    dietaryDetail: new FormControl(null, [
      Validators.min(0),
      Validators.max(280)
    ]),
    song: new FormControl(null, [
      Validators.min(0),
      Validators.max(100)
    ]),
    musicGeneral: new FormControl(false),
    musicDanceElectro: new FormControl(false),
    musicPopRock: new FormControl(false),
    musicFunk: new FormControl(false),
    musicRap: new FormControl(false),
    musicDisco: new FormControl(false),
    musicLatino: new FormControl(false),
    musicKpop: new FormControl(false),
    musicVpop: new FormControl(false),
    musicEighties: new FormControl(false),
    brunch: new FormControl(null, [Validators.required]),
    comment: new FormControl(null, [
      Validators.min(0),
      Validators.max(280)
    ])
  });


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
  public isPosted: boolean = false;
  public hasError: boolean = false;
  public songError: boolean = false;
  public songs: string[] = [];

  constructor(private guestService: GuestService,
    private logger: NGXLogger,
    private notificationService: NotificationService) {
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
      name: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ]),
      surname: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ])
    });
  }

  newChildrenFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(50)
      ]),
      age: new FormControl(null, [
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
    this.logger.info("submit guest");
    if (this.formGroupValid()) {
      this.hasError = false;
      const guest: Guest = this.createCompletedGuest();
      this.guestService.addGuestCompletion(guest).subscribe({
        next: () => {
          this.notificationService.success('Success', 'Registration successful, thank you.', 6000);
          this.resetForm();
          this.logger.info("Guests added successfully");
      },
        error: () => {
          this.notificationService.error('Failed', 'Registration failed. Please try again later.', 6000);
          this.logger.info("Error while adding guests");
        }
      });
    } else {
      this.hasError = true;
    }
  }

  formGroupValid(): boolean {
    if (this.guestForm.get('attend').value == 'no') {
      return this.guestForm.get('name').valid &&
        this.guestForm.get('surname').valid &&
        this.guestForm.get('phone').valid &&
        this.guestForm.get('email').valid;
    } else {
      return this.guestForm instanceof FormGroup && this.guestForm.valid;
    }
  }

  //TODO extract to component
  createCompletedGuest(): Guest {
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
      fromLocation: formValues.from,
      transportShare: this.willShareTransportation,
      event: formValues.event,
      dietary: this.hasDietary,
      dietaryDetail: formValues.dietaryDetail,
      songs: this.getSongs(),
      musicStyles: this.getMusicStyles(),
      brunch: this.willBrunch,
      comment: formValues.comment
    } as Guest;
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

  getSongs(): string {
    let songsStr = '';
    this.songs.forEach(song => {
      songsStr += `${song},`;
    })
    return songsStr;
  }

  getMusicStyles(): string {
    const map = new Map();
    Object.keys(this.guestForm.controls)
      .filter(controlName => controlName.startsWith('music'))
      .forEach(controlName => {
        map.set(controlName, this.guestForm.controls[controlName].value)
      });
    return Object.fromEntries(map);
  }


  resetForm() {
    this.isPosted = true;
    this.isSubmitted = false;
    this.songs = [];
    this.guestForm.reset();
  }
}
