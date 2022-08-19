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
  brands: ITypeNames;
  memory: ITypeNames;
}

export interface ITypeNames {
  [typeName: string]: boolean;
}

export interface FilterSliceState {
  sort: Sort;
  types: ITypes;
}
