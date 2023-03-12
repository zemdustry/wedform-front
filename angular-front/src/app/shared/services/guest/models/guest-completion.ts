import { Child } from "./child";
import { Person } from "./person";
import { Phone } from "./phone";

export interface GuestCompletion {
  name: string,
  surname: string,
  phone: Phone,
  email: string,
  attend: string,
  peopleCount: number,
  people: Person[],
  childrenCount:number,
  children: Child[],
  arrival: string,
  transportation: string,
  from: string,
  transportShare: boolean,
  event: string
  dietary: boolean,
  dietaryDetail: string,
  songs: string[];
  brunch: boolean,
  comment: string
}
