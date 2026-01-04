import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../state_slice/settingSlice';
import taskReducer from '../state_slice/taskSlice';
import summaryReducer from '../state_slice/summarySlice';
import profileReducer from "../state_slice/profileSlice"
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
    summary: summaryReducer,
    profile: profileReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
