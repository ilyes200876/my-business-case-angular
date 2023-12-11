import { SubCategoryInterface } from "./sub-category-interface";
import { UserInterface } from "./user-interface";

export interface NftInterface {
  id: number,
  price: number,
  createdAt?: Date,
  user: UserInterface,
  title: string,
  src: string,
  description: string,
  subCategories: SubCategoryInterface[]

}



