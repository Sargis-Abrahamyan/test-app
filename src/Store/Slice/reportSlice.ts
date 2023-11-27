import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { InitialState } from '../types/reports';
import { BASE_REPORTS_URL } from '../../Service/api';

const initialState: InitialState = {
  reports: [],
  loading: false,
  error: '',
};

export const fetchReports = createAsyncThunk(
  'reports/fetchReports',
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(`${BASE_REPORTS_URL}/reports`);
      if (status === 200) {
        return data;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addReports = createAsyncThunk(
  'reports/addReports',
  async (newReport: Reports, { rejectWithValue }) => {
    try {
      const rensponse = await axios.post(
        `${BASE_REPORTS_URL}/reports`,
        newReport
      );

      return rensponse.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);

export const updateReports = createAsyncThunk(
  'reports/updateReports',
  async (newReport: Reports, { rejectWithValue }) => {
    try {
      const rensponse = await axios.post(
        `${BASE_REPORTS_URL}/reports`,
        newReport
      );

      return rensponse.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);

export const deleteReports = createAsyncThunk(
  'reports/deleteReports',
  async (id: number, { rejectWithValue }) => {
    try {
      const { status } = await axios.delete(
        `${BASE_REPORTS_URL}/reports/${id}`
      );
      if (status === 200) {
        return { id };
      }
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReports.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReports.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.error = '';
      state.reports = payload;
      state.loading = false;
    });

    builder.addCase(fetchReports.rejected, (state, { error }) => {
      state.loading = false;
      state.reports = [];
      state.error = error.message;
    });

    builder.addCase(addReports.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addReports.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.reports.push(payload);
      state.error = '';
    });
    builder.addCase(addReports.rejected, (state, { error }) => {
      state.loading = false;
      state.reports = [];
      state.error = error.message;
    });
    builder.addCase(deleteReports.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteReports.fulfilled, (state, { payload }) => {
      state.reports = [
        ...state.reports.filter((item) => item.id !== payload?.id),
      ];
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteReports.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export default userSlice.reducer;
