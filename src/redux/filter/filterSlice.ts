import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum, ITypeNames } from './types';

const initialState: FilterSliceState = {
  types: {
    brands: {
      "Apple": false,
      "Samsung": false,
      "Xiaomi": false,
    },
    memory: {
      "8": false, 
      "16": false, 
      "32": false, 
      "64": false, 
      "128": false, 
      "256": false, 
      "512": false,
    },
  },
  sort: {
    name: 'по популярности (по убыванию)',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrands(state, action: PayloadAction<ITypeNames>) {
      state.types.brands = action.payload;
    },
    setMemory(state, action: PayloadAction<ITypeNames>) {
      state.types.memory = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<any>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.types.brands = action.payload;
      } else {
        state.sort = {
          name: 'популярности',
          sortProperty: SortPropertyEnum.RATING_DESC,
        };
        state.types.brands = {
          "Apple": false,
          "Samsung": false,
          "Xiaomi": false,
        };
      }
    },
  },
});

export const {setSort, setFilters, setBrands, setMemory} = filterSlice.actions;

export default filterSlice.reducer;
