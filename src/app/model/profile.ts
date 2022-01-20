import { Address } from "./address";

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  phone: string[];
}
