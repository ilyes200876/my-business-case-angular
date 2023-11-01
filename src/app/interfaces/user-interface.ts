import { AddressInterface } from "./address-interface";
import { NftInterface } from "./nft-interface";

export interface UserInterface {
  id: number,
  email: string,
  password: string,
  gender: string,
  firstNale: string,
  lastName: string,
  nickname: string,
  birthDate: Date,
  isOwner: boolean,
  nfts: NftInterface[],
  address: AddressInterface[]
}

export interface CredentialsInterface{
  username: string,
  password:string
}

