import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import countries from '../data/countries';

const initialState = {
  cities: [],
  countries: countries,
  weather: {
    name: 'area',
    weather: [{ main: '', description: '' }],
    main: { temp: '', pressure: '', humidity: '' },
    wind: { speed: '' },
  },
};

const apiKey = '989c8157d1fdc9df18652ff14105abd1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (cord) => {
  const response = await axios.get(`${apiUrl}?lat=${cord.lat}&lon=${cord.long}&appid=${apiKey}`);
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    getCities: (state, action) => {
      state.cities = action.payload;
    },
    filterCountries: (state, action) => {
      state.countries = initialState.countries.filter((country) => country.region === action.payload);
    },
    getWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weather = initialState.weather;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.weather = initialState.weather;
      });
  },
});

export const { getCities, filterCountries, getWeather } = weatherSlice.actions;
export default weatherSlice.reducer;