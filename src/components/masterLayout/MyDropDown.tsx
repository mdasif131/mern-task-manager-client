import { LogOut, UserRound } from 'lucide-react';
import { NavLink } from 'react-router';
import { getUerInfo, removeSession } from '../../helper/sessionHelper';
const MyDropDown = () => { 
  const userInfo = getUerInfo()
  const onLogout = () => {
    removeSession();
  }
  return (
    <div className="relative group">
      <div className="w-15 h-15 flex flex-col justify-center items-center ">
        <img
          src={userInfo?.photo}
          alt="profile image"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div className="hidden group-hover:block absolute bg-white w-65 right-0! top-16 z-10 shadow-lg rounded transition-all duration-300 ease-in-out mx-auto">
        <div className="flex flex-col items-center justify-center border-y py-4 gap-y-2">
          <div className="w-18 h-18 flex flex-col items-center justify-center rounded-full mx-auto">
            <img
              src={userInfo?.photo}
              alt="profile image"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <h6 className="text-xl font-bold">{`${userInfo?.firstName} ${userInfo?.lastName}`}</h6>
        </div>
        <div className="flex flex-col ">
          <NavLink
            to={'profile'}
            className={`p-3 hover:bg-purple-500/30 hover:border-l-4 hover:border-purple-500`}
          >
            <div className="flex items-center gap-2">
              <UserRound size={20} />
              <span className="text-lg">Profile</span>
            </div>
          </NavLink>
          <button
            onClick={onLogout}
            className={`p-3 hover:bg-purple-500/30 hover:border-l-4 hover:border-purple-500`}
          >
            <div className="flex items-center gap-2">
              <LogOut size={20} />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDropDown;
