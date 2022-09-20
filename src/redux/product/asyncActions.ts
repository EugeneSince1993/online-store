import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IProduct } from '../../types/IProduct';
import { SearchProductParams } from './types';

export const fetchProducts = createAsyncThunk<IProduct[], SearchProductParams>(
  'product/fetchProducts',
  async (params) => {
    const { _sort, _order } = params;
    const { data } = await axios.get<IProduct[]>('/products', {
      params: {
        _sort,
        _order,
      },
    });
    return data;
  }
);
