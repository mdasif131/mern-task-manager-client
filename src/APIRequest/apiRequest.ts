import axios from 'axios'
import { ErrorToast, SuccessToast } from '../helper/formHelper';
const BaseURL = 'https://mern-task-manager-backend-cyan.vercel.app/api/v1';
import { store } from '../redux/store/store'
import { HideLoader, ShowLoader } from '../redux/state_slice/settingSlice';
interface RegistrationRequestBody {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  photo: string;
}

export async function RegistrationRequest(email: string, firstName: string, lastName: string, mobile: string, password: string, photo: string): Promise<boolean> {
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
