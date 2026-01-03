
class SessionHelper{
  setToken(token: string) {
    localStorage.setItem("token", token)
  } 
  getToken(): string | null {
    return localStorage.getItem("token");
  }
  setUserInfo(data:string){
    localStorage.setItem("UserInfo", JSON.stringify(data))
  }
  getUerInfo():string | null {
    let info = localStorage.getItem("UserInfo");
    if (info) { 
      return JSON.parse(info);
    }
    return null;
  }
} 
export const {setToken,getToken,setUserInfo, getUerInfo} = new SessionHelper();