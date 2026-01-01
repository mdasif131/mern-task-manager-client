import { Link, NavLink } from 'react-router';
import { UserRound, LogOut } from 'lucide-react';
const MyDropDown = () => {
  return (
    <div className="relative group">
      <div className="overflow-hidden size-15 rounded-full">
        <img
          src="https://i.postimg.cc/KzNDZMTL/asif-profile.png"
          alt="profile image"
          className=""
        />
      </div>
      <div className="hidden group-hover:block absolute bg-white w-65 right-0! top-16 z-10 shadow-lg rounded transition-all duration-300 ease-in-out mx-auto">
        <div className="flex flex-col items-center justify-center border-y py-4 gap-y-2">
          <div className="overflow-hidden size-18 rounded-full">
            <img
              src="https://i.postimg.cc/KzNDZMTL/asif-profile.png"
              alt="profile image"
              className=""
            />
          </div>
          <h6 className="text-xl font-bold">MD ASIF CHOWDHURY</h6>
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
          <Link
            to={'/logout'}
            className={`p-3 hover:bg-purple-500/30 hover:border-l-4 hover:border-purple-500`}
          >
            <div className="flex items-center gap-2">
              <LogOut size={20} />
              <span>Logout</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyDropDown;
