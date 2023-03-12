import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormFieldControllerService } from '../../services/form-field-controller.service';
import { arrivalOptions, attendOptions, brunchOptions, dietaryOptions, eventOptions, transportOptions, transportShareOptions } from './options';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [FormFieldControllerService]
})
export class RegisterComponent {
  guestForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    attend: new FormControl(),
    persons: new FormControl(),
    personFormGroups: new FormArray([]),
    children: new FormControl(),
    childFormGroups: new FormArray([]),
    arrival: new FormControl(),
    transportation: new FormControl(),
    transportShare: new FormControl(),
    event: new FormControl(),
    dietary: new FormControl(),
    dietaryDetail: new FormControl(),
    song: new FormControl(),
    brunch: new FormControl(),
    comment: new FormControl()
  });

  public attendOptions = attendOptions;
  public arrivalOptions = arrivalOptions;
  public transportOptions = transportOptions;
  public transportShareOptions = transportShareOptions;
  public eventOptions = eventOptions;
  public dietaryOptions = dietaryOptions;
  public brunchOptions = brunchOptions;

  public willAttend: boolean = true;
  public numberOfPeople: number = 1;
  peopleFormGroups: FormGroup[] = [];
  public numberOfChildren: number = 0;
  childFormGroups: FormGroup[] = [];
  public transportation: string;
  public dietary: boolean;
  songs: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.guestForm.get('attend').valueChanges.subscribe(value => {
      this.willAttend = value == "no" ? false : true;
    })

    this.guestForm.get('persons').valueChanges.subscribe(peopleCount => this.numberOfPeople = peopleCount)
    this.guestForm.get('children').valueChanges.subscribe(childrenCount => {
      if (this.numberOfChildren < childrenCount) {
        const childForm = new FormGroup({
          name: new FormControl(''),
          surname: new FormControl('')
        });
        this.childFormGroups.push(childForm);
      } else if (this.numberOfChildren > childrenCount) {
        this.childFormGroups.pop();
      }
      this.numberOfChildren = childrenCount;
    })

    this.guestForm.get('transportation').valueChanges.subscribe(transport => this.transportation = transport);
    this.guestForm.get('dietary').valueChanges.subscribe(dietary => this.dietary = dietary = 'yes' ? true : false)
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  addSong() {
    const songValue = this.guestForm.get('song').value;
    if (songValue !== null && songValue !== '') {
      this.songs.push(songValue);
      this.guestForm.get('song').reset();
    }
  }

  removeSong(song: string) {
    const indexToRemove = this.songs.indexOf(song); // find the index of the element to remove
    if (indexToRemove > -1) { // check if the element was found
      this.songs.splice(indexToRemove, 1); // remove the element at the found index
    }
  }

  onFormSubmit(): void {
    this.guestForm.patchValue({
      personFormGroups: new FormArray(this.peopleFormGroups),
      childFormGroups: new FormArray(this.childFormGroups)
    });
    console.log('Name:' + this.guestForm.get('name').value);
  }
}
