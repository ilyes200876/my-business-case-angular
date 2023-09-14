import { SubCategoryInterface } from "./sub-category-interface";

export interface CategoryInterface {
  id: number;
  categoryName: string,
  subCategories: SubCategoryInterface[]
}
