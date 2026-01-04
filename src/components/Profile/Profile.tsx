import { useEffect, useRef } from 'react';
import { GetProfileDetails } from '../../APIRequest/apiRequest';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store/store';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


const Profile = () => {
   const emailRef = useRef<HTMLInputElement>(null);
   const firstNameRef = useRef<HTMLInputElement>(null);
   const lastNameRef = useRef<HTMLInputElement>(null);
   const mobileRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null); 
  const hasFetched = useRef(false);
  console.log(emailRef.current?.value );
  const profileList = useSelector(
    (state: RootState) => state.profile.value
  );
  const profileData = profileList
  useEffect(() => {
    if (hasFetched.current) return; // solve multiple re-render
    hasFetched.current = true;
    GetProfileDetails();
  }, []);
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto bg-white px-8 py-10 rounded-xl shadow-2xl">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={profileData?.photo}
            alt="User Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <hr className="w-full mt-6 border-slate-300" />
        </div>

        {/* Form */}
        <form
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {/* Profile Picture */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">
              Profile Picture
            </label>
            <label
              htmlFor="picture"
              className="border rounded-md py-2 px-4 text-center cursor-pointer hover:ring hover:ring-purple-500"
            >
              Upload Image
            </label>
            <input id="picture" type="file" className="hidden" />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Email Address</label>
            <Input
              readOnly
              type="email"
              defaultValue={profileData?.email}
              className="focus-visible:ring-purple-500"
            />
          </div>

          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">First Name</label>
            <Input
              type="text"
              defaultValue={profileData?.firstName}
              ref={input => {
                firstNameRef.current = input;
              }}
              className="focus-visible:ring-purple-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Last Name</label>
            <Input
              type="text"
              defaultValue={profileData?.lastName}
              ref={input => {
                lastNameRef.current = input;
              }}
              className="focus-visible:ring-purple-500"
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Mobile</label>
            <Input
              ref={input => {
                mobileRef.current = input;
              }}
              type="text"
              defaultValue={profileData?.mobile}
              className="focus-visible:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Password</label>
            <Input
              ref={input => {
                passwordRef.current = input;
              }}
              type="password"
              defaultValue={profileData?.password}
              placeholder="••••••••"
              className="focus-visible:ring-purple-500"
            />
          </div>

          {/* Update Button */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center pt-4">
            <Button size="lg" variant="secondary" className="w-full max-w-md">
              UPDATE
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
