export interface CycleInterface {
  id?: number,
  sign: string,
  expense: {
    count: number,
    suffix: string
  },
  budget: {
    count: number,
    suffix: string
  },
  categories: {
    id: number,
    name: string,
    value: number,
    created: Date
  }[],
  created: Date
}
