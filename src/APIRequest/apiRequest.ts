import axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/formHelper';
import { getToken, setToken, setUserInfo } from '../helper/sessionHelper';
import { HideLoader, ShowLoader } from '../redux/state_slice/settingSlice';
import { store } from '../redux/store/store';
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from '../redux/state_slice/taskSlice';
import type {
  CreateTaskRequestBody,
  LoginRequestBody,
  RegistrationRequestBody,
} from '../helper/types';
import { SetSummary } from '../redux/state_slice/summarySlice';
const BaseURL = 'https://mern-task-manager-backend-cyan.vercel.app/api/v1';
const AxiosHeader = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};

export async function LoginRequest(
  email: string,
  password: string
): Promise<boolean> {
  store.dispatch(ShowLoader());
  let URL: string = BaseURL + '/login';
  let PostBody: LoginRequestBody = { email: email, password: password };
  try {
    const res = await axios.post(URL, PostBody);
    store.dispatch(HideLoader());
    if (res.status === 200 && res.data?.status === 'success') {
      setToken(res.data?.token);
      setUserInfo(res.data?.data);
      SuccessToast('Login Success');
      console.log(res.data?.data);
      console.log(res.data?.token);
      return true;
    } else {
      ErrorToast(res.data.message || 'Something went wrong');
      return false;
    }
  } catch (error: any) {
    store.dispatch(HideLoader());
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  }
}
export async function RegistrationRequest(
  email: string,
  firstName: string,
  lastName: string,
  mobile: string,
  password: string,
  photo: string
): Promise<boolean> {
  store.dispatch(ShowLoader());
  let URL: string = BaseURL + '/register';
  let PostBody: RegistrationRequestBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
  try {
    const res = await axios.post(URL, PostBody);
    store.dispatch(HideLoader());
    if (res.status === 201 && res.data?.status === 'success') {
      SuccessToast('Registration Success');
      return true;
    } else {
      ErrorToast(res.data.message || 'Something went wrong');
      return false;
    }
  } catch (error: any) {
    store.dispatch(HideLoader());
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  }
}

export async function CreateNewRequest(
  title: string,
  description: string
): Promise<boolean> {
  store.dispatch(ShowLoader());
  let URL: string = BaseURL + '/create-task';
  let PostBody: CreateTaskRequestBody = {
    title: title,
    description: description,
    status: 'New',
  };
  try {
    const res = await axios.post(URL, PostBody, AxiosHeader);
    store.dispatch(HideLoader());
    if (res.status === 201) {
      SuccessToast('Task Created Successfully');
      return true;
    } else {
      ErrorToast('Something went wrong');
      return false;
    }
  } catch (error: any) {
    store.dispatch(HideLoader());
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  }
}

type TaskStatus = 'New' | 'Completed' | 'Progress' | 'Canceled';
export async function GetTaskRequestByStatus(
  status: TaskStatus
): Promise<boolean> {
  store.dispatch(ShowLoader());
  let URL: string = `${BaseURL}/list-task-by-status/${status}`;

  try {
    const res = await axios.get(URL, AxiosHeader);
    const tasks = res.data?.listTask;
    if (res.status === 200) {
      switch (status) {
        case 'New':
          store.dispatch(SetNewTask(tasks));
          break;
        case 'Completed':
          store.dispatch(SetCompletedTask(tasks));
          break;
        case 'Progress':
          store.dispatch(SetProgressTask(tasks));
          break;
        case 'Canceled':
          store.dispatch(SetCanceledTask(tasks));
          break;
      }
      return true;
    } else {
      ErrorToast('Something went wrong');
      return false;
    }
  } catch (error: any) {
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  } finally {
    store.dispatch(HideLoader());
  }
}

export async function SummaryRequest(): Promise<boolean> {
  store.dispatch(ShowLoader());
  const URL: string = `${BaseURL}/task-status-count`;
  try {
    const res = await axios.get(URL, AxiosHeader);
    store.dispatch(SetSummary(res.data?.data));
    return true;
  } catch (error: any) {
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  } finally {
    store.dispatch(HideLoader());
  }
}
export async function DeleteRequest(id: string) {
  store.dispatch(ShowLoader());
  const URL: string = `${BaseURL}/delete-task/${id}`;
  try {
    const res = await axios.delete(URL, AxiosHeader);
    if (res.status === 200) {
      SuccessToast('Task Deleted Successfully');
      return true;
    }
  } catch (error: any) {
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  } finally {
    store.dispatch(HideLoader());
  }
} 

export async function UpdateStatusRequest(id: string, status: TaskStatus) {
  store.dispatch(ShowLoader());
  const URL: string = `${BaseURL}/update-task/${id}/${status}`;
  try {
    const res = await axios.get(URL, AxiosHeader); 
    if (res.status === 200) {
      SuccessToast('Status Updated Successfully');
      return true;
    }
  }catch (error: any) {
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  } finally {
    store.dispatch(HideLoader());
  }
}
