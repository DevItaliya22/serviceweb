import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIcon } from '../api/icon';

export const fetchIcon = createAsyncThunk('icon/fetchIcon', async () => {
  const data = await getIcon();
  return data;
});

const iconSlice = createSlice({
  name: 'icon',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIcon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIcon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchIcon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default iconSlice.reducer; 