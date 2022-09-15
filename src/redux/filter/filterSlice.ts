import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { 
  FilterSliceState, 
  Sort, 
  SortPropertyEnum, 
  IBrands, 
  INumberValue } from './types';

const initialState: FilterSliceState = {
  types: {
    brands: {
      "Apple": false,
      "Samsung": false,
      "Xiaomi": false,
      "Honor": false,
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
    ramMemory: {
      "1": false, 
      "2": false, 
      "3": false, 
      "4": false, 
      "6": false, 
      "8": false, 
      "12": false,
    },
    cpuCores: {
      "2": false, 
      "4": false, 
      "6": false, 
      "8": false, 
    },
    priceRange: {
      min: 0,
      max: 95000,
    },
    screenSizeRange: {
      min: 4,
      max: 7,
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
    setBrands(state, action: PayloadAction<IBrands>) {
      state.types.brands = action.payload;
    },
    setMemory(state, action: PayloadAction<INumberValue>) {
      state.types.memory = action.payload;
    },
    setRamMemory(state, action: PayloadAction<INumberValue>) {
      state.types.ramMemory = action.payload;
    },
    setCpuCores(state, action: PayloadAction<INumberValue>) {
      state.types.cpuCores = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.types.priceRange.min = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number>) {
      state.types.priceRange.max = action.payload;
    },
    setMinScreenSize(state, action: PayloadAction<number>) {
      state.types.screenSizeRange.min = action.payload;
    },
    setMaxScreenSize(state, action: PayloadAction<number>) {
      state.types.screenSizeRange.max = action.payload;
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

export const {
  setSort, 
  setFilters, 
  setBrands, 
  setMemory, 
  setRamMemory,
  setCpuCores,
  setMinPrice,
  setMaxPrice,
  setMinScreenSize,
  setMaxScreenSize
} = filterSlice.actions;

export default filterSlice.reducer;
