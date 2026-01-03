import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../state_slice/settingSlice';
import taskReducer from '../state_slice/taskSlice';
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
