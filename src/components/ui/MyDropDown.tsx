
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
      <div className="hidden group-hover:block absolute bg-white w-65 right-0! top-16 z-10 shadow-lg rounded transition-all duration-300 ease-in-out p-4 mx-auto">
        <div className="overflow-hidden size-20 rounded-full ml-16">
          <img
            src="https://i.postimg.cc/KzNDZMTL/asif-profile.png"
            alt="profile image"
            className=""
          />
        </div>
        <div className="inline-flex flex-col justify-center mt-4">
          <h6>MD ASIF CHOWDHURY</h6>
          <a>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyDropDown