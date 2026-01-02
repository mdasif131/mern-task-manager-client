import toast from 'react-hot-toast';

let EmailRegex = /^\S+@\S+\.\S+$/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FormHelper {
  IsEmpty(value: string): boolean {
    return value.length === 0;
  }
  IsMobile(value: string): boolean {
    return MobileRegx.test(value);
  }

  IsEmail(value: string): boolean {
    return !EmailRegex.test(value);
  }
  ErrorToast(msg: string): void {
    toast.error(msg, { position: 'bottom-center' });
  } 

  SuccessToast(msg: string): void{
    toast.success(msg, {position:"top-center"})
  }
}
export const { IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast } =
  new FormHelper();