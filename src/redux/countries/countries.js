import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v2/all';

export const getCountries = createAsyncThunk(
  'getCountries/',
  async () => {
    try {
      const response = await axios.get(baseUrl);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = [];

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      const listOfCountries = action.payload.data.map((el) => ({
        name: el.name,
        capital: el.capital,
        flag: el.flags.svg,
        timezone: el.timezones[0],
        region: el.region,
      }));
      return listOfCountries;
    });
  },
});
export const { toggleReservation } = countriesSlice.actions;
export default countriesSlice.reducer;
