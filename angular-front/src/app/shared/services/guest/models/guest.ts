import { Child } from "./child";
import { Person } from "./person";
import { Phone } from "./phone";

export interface Guest {
  id: number,
  name: string,
  surname: string,
  phone: Phone,
  email: string,
  attend: string,
  peopleCount: number,
  people?: Person[],
  childrenCount:number,
  children?: Child[],
  arrival: string,
  transportation: string,
  fromLocation: string,
  transportShare?: boolean,
  event: string
  dietary: boolean,
  dietaryDetail?: string,
  songs?: string,
  musicStyles: string,
  brunch: boolean,
  comment?: string
}

