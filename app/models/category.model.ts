export interface CategoryInterface {
  id?: number,
  name: string,
  created: Date
}

export class CategoriesModel implements CategoryInterface {
  id?: number;
  name: string;
  created: Date;
}
