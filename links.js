import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const patient = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        address: "overview",
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Medical Records",
        address: "medical-records",
        icon: <FiTwitter />,
      },
      {
        name: "History",
        address: "history",
        icon: <FiTwitter />,
      },
      {
        name: "Doctors",
        address: "doctors",
        icon: <FiTwitter />,
      },
      {
        name: "Appointments",
        address: "appointments",
        icon: <FiTwitter />,
      },
      {
        name: "Messages",
        address: "messages",
        icon: <FiTwitter />,
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
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Medical Records",
        address: "medical-records",
        icon: <FiTwitter />,
      },
      {
        name: "Patients",
        address: "patients",
        icon: <FiTwitter />,
      },
      {
        name: "Appointments",
        address: "appointments",
        icon: <FiTwitter />,
      },
      {
        name: "History",
        address: "history",
        icon: <FiTwitter />,
      },
      {
        name: "Messages",
        address: "messages",
        icon: <FiTwitter />,
      },
    ],
  },
];
