import { NftInterface } from "./nft-interface";

export interface MediaInterface {
  id: number,
  title: string,
  src: string,
  weight: number,
  format: string,
  description: string,
  nfts: NftInterface[]
}
