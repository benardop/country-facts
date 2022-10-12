import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v2/name/';

export const getDetials = createAsyncThunk(
  'getDetials/',
  async (name) => {
    try {
      const response = await axios.get(baseUrl + name);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    deleteDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getDetials.fulfilled, (state, action) => {
      const details = action.payload.data[0];
      return {
        name: details.name,
        capital: details.capital,
        flag: details.flags.svg,
        timezone: details.timezones[0],
        region: details.region,
        population: details.population,
        firstLanguage: details.languages[0].name,
        area: details.area,
        currencies: details.currencies[0].name,
      };
    });
  },
});
export const { deleteDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
