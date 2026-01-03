import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from '../../helper/types';

interface TaskState {
  New: Task[];
  Completed: Task[];
  Progress: Task[];
  Canceled: Task[];
}
const initialState: TaskState = {
  New: [],
  Completed: [],
  Progress: [],
  Canceled: [],
};
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    SetNewTask: (state, action: PayloadAction<Task[]>) => {
      state.New = action.payload;
    },
    SetCompletedTask: (state, action: PayloadAction<Task[]>) => {
      state.Completed = action.payload;
    },
    SetProgressTask: (state, action: PayloadAction<Task[]>) => {
      state.Progress = action.payload;
    },
    SetCanceledTask: (state, action: PayloadAction<Task[]>) => {
      state.Canceled = action.payload;
    },
  },
});

export const {
  SetNewTask,
  SetCompletedTask,
  SetProgressTask,
  SetCanceledTask,
} = taskSlice.actions;
export default taskSlice.reducer;
