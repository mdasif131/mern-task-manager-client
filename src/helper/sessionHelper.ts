import type { IUser } from "./types";

class SessionHelper{
  setToken(token: string) {
    localStorage.setItem("token", token)
  } 
  getToken(): string | null {
    return localStorage.getItem("token");
  }
  setUserInfo(data:IUser){
    localStorage.setItem("UserInfo", JSON.stringify(data))
  }
  getUerInfo():IUser | null {
    let info = localStorage.getItem("UserInfo");
    if (info) { 
      return JSON.parse(info) as IUser;
    }
    return null;
  }
  removeSession(): void {
    localStorage.clear();
    window.location.href = '/login';
  }
} 
export const { setToken, getToken, setUserInfo, getUerInfo, removeSession } =
  new SessionHelper();