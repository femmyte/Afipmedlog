import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { TbReceipt } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiMessage3Line } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
export const patient = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        address: "overview",
        icon: <LuLayoutDashboard />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Medical Records",
        address: "medical-records",
        icon: <TbReceipt />,
      },
      {
        name: "History",
        address: "history",
        icon: <RxCounterClockwiseClock />,
      },
      {
        name: "Doctors",
        address: "doctors",
        icon: <LuUsers2 />,
      },
      {
        name: "Appointments",
        address: "appointments",
        icon: <LuCalendarCheck />,
      },
      {
        name: "Messages",
        address: "messages",
        icon: <RiMessage3Line />,
      },
    ],
  },
];

export const doctor = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        address: "overview",
        icon: <LuLayoutDashboard />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Medical Records",
        address: "medical-records",
        icon: <TbReceipt />,
      },
      {
        name: "Patients",
        address: "patients",
        icon: <LuUsers2 />,
      },
      {
        name: "Appointments",
        address: "appointments",
        icon: <LuCalendarCheck />,
      },
      {
        name: "History",
        address: "history",
        icon: <RxCounterClockwiseClock />,
      },
      {
        name: "Messages",
        address: "messages",
        icon: <RiMessage3Line />,
      },
    ],
  },
];
