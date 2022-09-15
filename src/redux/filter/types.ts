export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'name',
  TITLE_ASC = '-name',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
}

export interface ITypes {
  brands: IBrands;
  memory: INumberValue;
  ramMemory: INumberValue;
  cpuCores: INumberValue;
  priceRange: IRange;
  screenSizeRange: IRange;
  batteryCapacityRange: IRange;
}

export interface IBrands {
  [brand: string]: boolean;
}

export interface INumberValue {
  [numberValue: string]: boolean;
}

export interface IRange {
  min: number;
  max: number;
}

export interface FilterSliceState {
  sort: Sort;
  types: ITypes;
}
