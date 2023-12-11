import { AddressInterface } from "./address-interface";
import { NftInterface } from "./nft-interface";

export interface UserInterface {
  id: number,
  email: string,
  password: string,
  gender: string,
  firstName: string,
  lastName: string,
  nickname: string,
  birthDate: Date,
  roles: string[],
  profilePic: string,
  nfts: NftInterface[],
  address?: AddressInterface
}

export interface CredentialsInterface{
  username: string,
  password:string
}

