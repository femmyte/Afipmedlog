"use client";
import {
  useContext,
  useEffect,
  createContext,
  useRef,
  useState,
  useCallback,
} from "react";
import protocolDefinition from "@/protocols/healthRecord.json";
import useWeb5 from "./useWeb5";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  let login = false;
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const scrollContainerRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState();
  const [screenSize, setScreenSize] = useState(undefined);
  const [darkToggle, setDarkToggle] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [fetchedTweets, setFetchedTweets] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [isGettingUser, setIsGettingUser] = useState(false);
  const [userRecord, setUserRecord] = useState(null);
  const [guardianRecord, setguardianRecord] = useState([]);
  const [guardianInfo, setGuardianInfo] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [sharedHealthRecord, setSharedHealthRecord] = useState([]);
  const [currentUser, setCurrentUser] = useState("user");
  const [didDocument, setDidDocument] = useState({});
  const { web5, myDid, initWeb5 } = useWeb5();
  // const getObject = useCallback(async () => {
  //   // Local dwN
  //   // const { web5, did } = await Web5.connect({
  //   // 	techPreview: {
  //   // 		dwnEndpoints: ['http://localhost:3000/'],
  //   // 	},
  //   // });
  //   // setMyDid(did);
  //   // setWeb5(web5);

  //   // Online DWN
  //   // const { web5 } = await Web5.connect(existingDid);
  //   // const web5 = await Web5.connect(existingDid);
  //   // const { agent: userWeb } = web5.options || {};
  //   // console.log(userWeb);
  //   if (existingDid) {
  //     const { web5 } = await Web5.connect(existingDid);
  //     // Rest of your code that uses the `web5` object
  //     setMyDid(existingDid);
  //     setWeb5(web5);
  //   } else {
  //     // Handle the case when `existingDid` is null or undefined
  //     console.error("Invalid existingDid");
  //   }
  // }, []);

  // useEffect(() => {
  //   getObject();
  // }, [getObject]);
  const queryLocalProtocol = async (web5) => {
    // this is in query local protocol
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
        },
      },
    });
  };

  const queryRemoteProtocol = async (web5, did) => {
    // this is where Query remote protocol is
    return await web5.dwn.protocols.query({
      from: did,
      message: {
        filter: {
          protocol: protocolDefinition.protocol,
        },
      },
    });
  };
  const installLocalProtocol = async (web5, protocolDefinition) => {
    // this is where we install local protocol
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const installRemoteProtocol = async (web5, did, protocolDefinition) => {
    // this is where we install remote protocol
    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
    return await protocol.send(did);
  };

  const configureProtocol = useCallback(async () => {
    const protocolUrl = protocolDefinition.protocol;

    const { protocols: localProtocols, status: localProtocolStatus } =
      await queryLocalProtocol(web5, protocolUrl);

    if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
      const result = await installLocalProtocol(web5, protocolDefinition);
      // console.log({ result });
      console.log("Protocol installed locally");
    }

    if (localProtocols.length > 0) {
      console.log("Protocol already exists");
      return;
    }

    const { protocols: remoteProtocols, status: remoteProtocolStatus } =
      await queryRemoteProtocol(web5, myDid, protocolUrl);

    if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
      const { result: remoteResult } = await installRemoteProtocol(
        web5,
        myDid,
        protocolDefinition
      );
      // console.log({ result });
      console.log("Protocol installed remotely", remoteResult);
    }
  }, [web5, myDid]);

  // Run configureProtocol when web5 or myDid changes
  useEffect(() => {
    if (web5) {
      configureProtocol();
    }
  }, [web5, configureProtocol]);

  const getUser = useCallback(async () => {
    setIsGettingUser(true);
    try {
      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.patientInfo.schema,
          },
        },
      });

      // console.log(records);
      // add entry to userInfo
      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setUserInfo((user) => {
          if (!user.some((item) => item.id === list.id)) {
            return [...user, list];
          }
          return user;
        });
      }
      // console.log(userInfo);
      if (userInfo.length > 0) {
        setUser(userInfo[0].data);
      }
      if (records) {
        setIsGettingUser(false);
      }
      return userInfo;
    } catch (error) {
      console.log("error getting user", error);
    }
  }, [web5, userInfo]);
  useEffect(() => {
    if (web5) getUser();
  }, [getUser, web5]);
  const getDoctor = useCallback(async () => {
    setIsGettingUser(true);
    try {
      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: protocolDefinition.types.doctorInfo.schema,
          },
        },
      });

      // console.log(records);
      // add entry to doctorInfo
      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setDoctorInfo((user) => {
          if (!user.some((item) => item.id === list.id)) {
            return [...user, list];
          }
          return user;
        });
      }
      // console.log(userInfo);
      if (doctorInfo.length > 0) {
        setUser(doctorInfo[0].data);
      }
      if (records) {
        setIsGettingUser(false);
      }
      return doctorInfo;
    } catch (error) {
      console.log("error getting user", error);
    }
  }, [web5, doctorInfo]);
  useEffect(() => {
    if (web5) getDoctor();
  }, [getDoctor, web5]);
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole === "patient") {
      setUserName(userInfo[0]?.data?.personalInfo?.lastName);
    } else if (storedRole === "doctor") {
      setUserName(doctorInfo[0]?.data?.personalInfo?.lastName);
    }
  }, [doctorInfo, userInfo]);
  //  get the shared record for Doctors
  const getRecordSharedWithDoctor = useCallback(async () => {
    const userInfoProtocol = protocolDefinition;

    console.log("running");
    try {
      const response = await web5.dwn.records.query({
        from: myDid,
        message: {
          filter: {
            schema: protocolDefinition.types.patientInfo.schema,
            protocol: userInfoProtocol.protocol,
          },
        },
      });
      // console.log(response);
      for (let record of response.records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setSharedHealthRecord((user) => {
          if (!user || !user.some((item) => item.id === list.id)) {
            return [...(user || []), list];
          }
          return user;
        });
      }
    } catch (error) {
      console.log(error);
    }

    // const response = await web5.dwn.records.query({
    //   from: myDid,
    //   message: {
    //     filter: {
    //       protocol: userInfoProtocol.protocol,
    //       schema: userInfoProtocol.types.patientInfo.schema,
    //     },
    //   },
    // });

    // if (response.status.code === 200) {
    //   const receivedRecord = await Promise.all(
    //     response.records.map(async (record) => {
    //       const data = await record.data.json();
    //       return data;
    //     })
    //   );
    //   // console.log(response.record.timestamp);
    //   // console.log(receivedRecord, "I received these records");

    //   setSharedHealthRecord(receivedRecord);
    //   // return receivedDings;
    // } else {
    //   console.log("error", response.status);
    // }
  }, [web5, myDid]);
  useEffect(() => {
    if (web5) {
      getRecordSharedWithDoctor();
    }
  }, [getRecordSharedWithDoctor, web5]);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };
  return (
    <AppContext.Provider
      value={{
        login,
        // setUser,
        user,
        userName,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        darkToggle,
        setDarkToggle,
        scrollContainerRef,
        openLogoutModal,
        setOpenLogoutModal,
        userRole,
        setUserRole,
        // getUser,
        isGettingUser,
        userRecord,
        setUserRecord,
        guardianRecord,
        setguardianRecord,
        guardianInfo,
        setGuardianInfo,
        userInfo,
        setUserInfo,
        sharedHealthRecord,
        setSharedHealthRecord,
        authModal,
        setAuthModal,
        doctorInfo,
        setDoctorInfo,
        currentUser,
        setCurrentUser,
        myDid,
        web5,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(AppContext);
};
