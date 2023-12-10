"use client";
import { useEffect } from "react";
import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";
import { useStateContext } from "@/state/AppContext";
import { useRouter } from "next/navigation";
// import Userpool from '@/state/Userpool';
// import CustomModal from '../CustomModal';
import { FaWindowClose } from "react-icons/fa";

function DashboardLayout({ children }) {
  const router = useRouter();
  const { openLogoutModal, setOpenLogoutModal, activeMenu, darkToggle, login } =
    useStateContext();
  // const handleLogout = () => {
  // 	const user = Userpool.getCurrentUser();
  // 	user.signOut();
  // 	localStorage.removeItem('user');
  // 	router.push('/');
  // };

  return (
    <section className={`${darkToggle && "dark"} App overflow-x-hidden`}>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <aside className="w-72 md:w-[18%] fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </aside>
        ) : (
          <aside className={"w-0 dark:bg-secondary-dark-bg"}>
            <Sidebar />
          </aside>
        )}

        <div
          className={`
              ${
                activeMenu ? "md:w-[82%] md:ml-[18%] " : "flex-2"
              } dark:bg-main-bg bg-main-bg min-h-screen w-full`}
        >
          <div
            className={
              "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
            }
          >
            <Navbar />
          </div>

          <div className=" pt-[30px] pb-[20px] px-[2rem]">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default DashboardLayout;
