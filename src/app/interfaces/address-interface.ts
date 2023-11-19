import { UserInterface } from "./user-interface";

export interface AddressInterface {
  id?:number,
  street?:string,
  department?: string,
  zipCode?:string,
  country?: string,
  users?: UserInterface[]
}
