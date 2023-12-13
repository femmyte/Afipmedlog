"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import Link from "next/link";
import { useStateContext } from "@/state/AppContext";
import { FaCertificate, FaUserTie } from "react-icons/fa";
import { MdSecurityUpdate } from "react-icons/md";
// import { useAccountContext } from '@/state/AccountState';
import Image from "next/image";
import SearchComponent from "../SearchComponent";
import { usePathname } from "next/navigation";
const NavButton = ({ title, customFunc, icon, color, dotColor, num }) => (
  <div className="relative">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {icon}
    </button>
    <div
      style={{ backgroundColor: dotColor }}
      className="absolute rounded-full h-[15px] w-[15px] right-[7px] top-[4px] text-[10px] text-white flex items-center justify-center"
    >
      {num}
    </div>
  </div>
);

const Navbar = () => {
  let nav = "";
  const { setActiveMenu, screenSize, setScreenSize, setDarkToggle, userName } =
    useStateContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [storedRole, setStoredRole] = useState("");
  const [user, setUser] = useState("");
  const { doctorInfo, userInfo } = useStateContext();
  const [dropDown, setDropDown] = useState(false);
  const [notificationdropDown, setNotificationdropDown] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setStoredRole(storedRole);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropDown = () => {
    if (dropDown) {
      setDropDown(false);
      setNotificationdropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const handleNotificationDropDown = () => {
    setNotificationdropDown(true);
    if (notificationdropDown) {
      setDropDown(false);
      setNotificationdropDown(false);
    } else {
      setNotificationdropDown(true);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div
      className="flex justify-between items-center px-[2rem] py-[1.5rem] relative  text-black dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white w-full"
      style={{ boxShadow: "4px 4px 24px 0px rgba(206, 206, 206, 0.24)" }}
    >
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevState) => !prevState)}
        color="black"
        icon={<AiOutlineMenu />}
      />
      <div className="">
        <SearchComponent />
      </div>
      <div className="flex gap-x-[50px]">
        {/* <NavButton
					title='Mode'
					customFunc={() => setDarkToggle((prevState) => !prevState)}
					color='white'
					icon={<AiOutlineMail />}
					dotColor='red'
					num={4}
				/> */}
        <div className="flex gap-x-[2rem] items-center">
          <NavButton
            title="Notifications"
            dotColor="red"
            customFunc={() => setNotificationdropDown(!notificationdropDown)}
            color="black"
            num={2}
            icon={<RiNotification3Line />}
          />

          {/* <div
            className="md:mr-[40px]  relative cursor-pointer hover:bg-light-gray rounded-lg "
            onClick={() => setDropDown(!dropDown)}
          > */}
          <div
            className="relative group cursor-pointer"
            onClick={toggleDropdown}
          >
            <div
              className={`flex items-center gap-x-2 `}
              // onMouseEnter={handleDropDown}
              // onMouseLeave={() => setDropDown(false)}
              // onClick={() => handleClick("userProfile")}
            >
              <Image
                src={"/images/user.png"}
                alt="avatar"
                height={32}
                width={32}
                className="rounded-full w-8 h-8 ml-4"
              />
              <p className="text-gray-400 font-bold ml-1">{userName}</p>
            </div>

            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white rounded-md shadow-lg w-40 z-50">
                <Link
                  href={`/${storedRole}/profile`}
                  onClick={toggleDropdown}
                  className={
                    pathname.includes("profile")
                      ? "text-[0.875rem] text-primaryBlue font-[400] leading-5 block px-4 py-2"
                      : "text-[0.875rem] text-[#151515] font-[400] leading-5 block px-4 py-2 hover:bg-gray-400"
                  }
                >
                  Profile
                </Link>
                <Link
                  href={`/${storedRole}/settings`}
                  onClick={toggleDropdown}
                  className={
                    pathname.includes("settings")
                      ? "text-[0.875rem] text-primaryBlue font-[400] leading-5 block px-4 py-2"
                      : "text-[0.875rem] text-[#151515] font-[400] leading-5 block  px-4 py-2 hover:bg-gray-400"
                  }
                >
                  Settings
                </Link>
              </div>
            )}

            {/* <ul
							className={`${
								dropDown
									? 'opacity-100 mt-10 py-3 z-10'
									: 'hidden'
							} dropdown`}
						>
							<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-black text-md'>
								<FaUserTie />
								<Link href={`/${nav}/settings/profile`}>
									Profile
								</Link>
							</li>
							<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-black text-md'>
								<RiNotification3Line />
								<Link href={`/${nav}/settings/notification`}>
									Notification
								</Link>
							</li>
							<li className='flex items-center gap-x-5 px-3 pb-2.5 rounded-lg text-black text-md'>
								<MdSecurityUpdate />
								<Link href={`/${nav}/settings/security`}>
									Security
								</Link>
							</li>
						</ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
