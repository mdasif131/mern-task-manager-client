import axios from 'axios'
import { ErrorToast, SuccessToast } from '../helper/formHelper';
const BaseURL = 'https://mern-task-manager-backend-cyan.vercel.app/api/v1';

interface RegistrationRequestBody {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  photo: string;
}

export async function RegistrationRequest( email: string,firstName: string,lastName: string, mobile: string, password: string, photo: string): Promise<boolean> {
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
    if (res.status === 201 && res.data?.status === 'success') {
      SuccessToast('Registration Success');
      return true;
    } else {
      ErrorToast(res.data.message || 'Something went wrong');
      return false;
    }
  } catch (error: any) {
    ErrorToast(error?.response?.data?.message || 'Something went wrong');
    return false;
  }
}
