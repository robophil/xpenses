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
  categories: {
    id: number,
    name: string,
    value: number,
    money: string,
    created: Date
  }[],
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
  categories: {
    id: number;
    name: string;
    value: number;
    money: string;
    created: Date;
  }[];
  created: Date;
}
