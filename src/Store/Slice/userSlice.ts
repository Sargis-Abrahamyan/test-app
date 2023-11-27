import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { InitialState } from '../types/users';
import { BASE_USERS_URL } from '../../Service/api';

const initialState: InitialState = {
  users: [],
  loading: false,
  error: '',
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(`${BASE_USERS_URL}/users`);

      if (status === 200) {
        return data;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.error = '';
      state.users = payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, { error }) => {
      state.error = error.message;
      state.users = [];
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
