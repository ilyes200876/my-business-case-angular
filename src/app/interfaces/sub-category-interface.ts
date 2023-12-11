import { CategoryInterface } from "./category-interface";
import { NftInterface } from "./nft-interface";

export interface SubCategoryInterface {
  id: number
  subCategoryName?: string,
  nfts?: NftInterface[],
  category?: CategoryInterface
}
