export interface CyclesCategoryInterface {
  id: number,
  name: string,
  value: number,
  category_id: number,
  money: string,
  created: Date
}

export interface CycleInterface {
  id?: number,
  sign: string,
  progress?: number,
  balance?: {
    value: number,
    money: string
  },
  expense: {
    value: number,
    money: string
  },
  budget: {
    value: number,
    money: string
  },
  categories: CyclesCategoryInterface[],
  created: Date
}

export class CyclesModel implements CycleInterface {
  id?: number;
  sign: string;
  progress?: number;
  balance?: {
    value: number,
    money: string
  };
  expense: {
    value: number,
    money: string
  };
  budget: {
    value: number,
    money: string
  };
  categories: CyclesCategoryInterface[];
  created: Date;
}
