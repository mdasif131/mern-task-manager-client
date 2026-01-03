import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Based on your API response
export interface Summary {
  _id: string; // Status name: "Canceled", "Completed", "New", "Progress"
  sum: number; // Count of tasks
}

interface SummaryState {
  value: Summary[];
}

const initialState: SummaryState = {
  value: [],
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    SetSummary: (state, action: PayloadAction<Summary[]>) => {
      state.value = action.payload;
    },

  },
});

export const { SetSummary } = summarySlice.actions;
export default summarySlice.reducer;
