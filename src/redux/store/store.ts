import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../state_slice/settingSlice';
import taskReducer from '../state_slice/taskSlice';
import summaryReducer from '../state_slice/summarySlice';
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
    summary: summaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
