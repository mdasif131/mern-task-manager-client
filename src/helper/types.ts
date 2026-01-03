export interface RegistrationRequestBody {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  photo: string;
} 
export interface LoginRequestBody {
  email: string;
  password: string;
} 
export interface CreateTaskRequestBody {
  title: string;
  description: string;
  status?: string;
} 
export interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'New' | 'Completed' | 'Progress' | 'Canceled';
  createDate?: string;
  // Add other fields from your API response
} 

