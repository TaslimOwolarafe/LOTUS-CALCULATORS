import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className="flex h-[53px] justify-between items-center w-full py-[35px] z-10">
      {/* Left Section: Logo */}
      <div className="flex items-center bg-[#FFFFFF] w-[204.47px] h-[53px] space-x-6 bg-white py-2 px-4 rounded-full">
        <Image width={204.47} height={53}
          src="/assets/images/logo2x 1.png"
          alt="Lotus Capital"
          className="h-10"
        />
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex items-center justify-center text-[8.72px] bg-[#FFFFFF] h-[53px] w-[684px] space-x-6 bg-white py-2 px-4 rounded-full">
        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
          <Image width={15.55} height={15.55} src="/assets/images/dashboard.png" alt="" className=""/>
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
            <Image width={15.55} height={15.55} src="/assets/images/globalAssests.png" alt="" className=""/>
          <span>Global Assets</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
          <Image width={15.55} height={15.55} src="/assets/images/family.png" alt="" className=""/>
          <span>Family & Critical Contacts</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
          <Image width={15.55} height={15.55} src="/assets/images/calculators.png" alt="" className=""/>
          <span>Calculators</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
          <Image width={15.55} height={15.55} src="/assets/images/budget.png" alt="" className=""/>
          <span>Budget Planners</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
          <Image width={15.55} height={15.55} src="/assets/images/bequest.png" alt="" className=""/>
          <span>Bequest</span>
        </a>
      </div>

      {/* Right Section: Search, Notifications, and Profile */}
      {/* <div className="flex items-center space-x-4"> */}
        {/* Search */}
        <div className="flex items-center bg-[#FFFFFF] h-[53px] w-[240px] space-x-2 bg-white px-4 rounded-full">
          <i className="fas fa-search text-gray-400"><Image width={21.69} height={22.71} src="/assets/images/SearchIcon.png" alt="" className=""/></i>
          <input
            type="text"
            placeholder="search here"
            className="ml-2 outline-none bg-transparent text-gray-100"
          />
        </div>
        {/* Notification */}
        <div className="flex relative items-center bg-[#FFFFFF] h-[53px] space-x-6 bg-white py-2 px-4 rounded-full">
          <Image width={15.55} height={15.55} src="/assets/images/notification.png" alt="" className=""/>
          <span className="absolute top-[5px] right-[2px] bg-red-500 rounded-full w-2.5 h-2.5"></span>
        </div>
        {/* Profile */}
        <div className="flex items-center bg-[#FFFFFF] h-[53px] w-[53px] space-x-6 bg-white rounded-full">
         <Image width={53} height={53}
          src="/assets/images/Ellipse 140.png"
          alt="User Avatar"
          className="h-[53px] w-[53px] rounded-full object-cover"
        />   
        </div>
        
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
