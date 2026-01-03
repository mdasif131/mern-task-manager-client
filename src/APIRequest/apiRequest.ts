import axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/formHelper';
import { getToken, setToken, setUserInfo } from '../helper/sessionHelper';
import { HideLoader, ShowLoader } from '../redux/state_slice/settingSlice';
import { store } from '../redux/store/store';
const BaseURL = 'https://mern-task-manager-backend-cyan.vercel.app/api/v1';
const AxiosHeader = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};
interface RegistrationRequestBody {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  photo: string;
}
interface LoginRequestBody {
  email: string;
  password: string;
}
interface CreateTaskRequestBody {
  title: string;
  description: string;
  status?: string;
}
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
      setToken( res.data?.token);
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
 
export async function CreateNewRequest(title: string, description: string): Promise<boolean>{
  store.dispatch(ShowLoader());
  let URL: string = BaseURL + '/create-task';
  let PostBody: CreateTaskRequestBody = { title: title, description: description, status: "New" };  
  try {
    const res = await axios.post(URL, PostBody, AxiosHeader);
    store.dispatch(HideLoader()); 
    if (res.status === 201) {
      SuccessToast('Task Created Successfully');
      return true;
    } else {
      ErrorToast("Something went wrong");
      return false;
    }
  } catch (error: any) {
    store.dispatch(HideLoader());
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  }
}