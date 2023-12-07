"use client";
import {
  useContext,
  useEffect,
  createContext,
  useRef,
  useState,
  useCallback,
} from "react";
// import { Web5 } from "@web5/api";
// import { Web5 } from "@web5/api/browser";
import protocolDefinition from "@/protocols/healthRecord.json";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  let login = false;
  const [user, setUser] = useState("");
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

  // web5
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);
  const [didDocument, setDidDocument] = useState({});
  useEffect(() => {
    const existingDid = localStorage.getItem("myDid");

    const initWeb5 = async () => {
      // @ts-ignore
      const { Web5 } = await import("@web5/api/browser");
      try {
        const { web5, did } = await Web5.connect(existingDid);

        setWeb5(web5);
        setMyDid(did);

        if (web5 && did) {
          console.log("Web5 initialized");
        }
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };

    initWeb5();
  }, []);
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

    // if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
    const result = await installLocalProtocol(web5, protocolDefinition);
    // console.log({ result });
    console.log("Protocol installed locally");
    // }

    if (localProtocols.length > 0) {
      console.log("Protocol already exists");
      return;
    }

    const { protocols: remoteProtocols, status: remoteProtocolStatus } =
      await queryRemoteProtocol(web5, myDid, protocolUrl);

    // if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
    const { result: remoteResult } = await installRemoteProtocol(
      web5,
      myDid,
      protocolDefinition
    );
    //   console.log({ result });
    console.log("Protocol installed remotely");
    // }
  }, [web5, myDid]);

  // Run configureProtocol when web5 or myDid changes
  useEffect(() => {
    if (web5) {
      configureProtocol();
    }
  }, [web5, configureProtocol]);

  // const configureProtocol = async (web5, did) => {
  // 	// this is where we configure our protocol
  // 	const protocolUrl = protocolDefinition.protocol;

  // 	const { protocols: localProtocols, status: localProtocolStatus } =
  // 		await queryLocalProtocol(web5, protocolUrl);
  // 	if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
  // 		const result = await installLocalProtocol(web5, protocolDefinition);
  // 		console.log({ result });
  // 		console.log('Protocol installed locally');
  // 	}
  // 	// if the protocol already exists, we return
  // 	if (localProtocols.length > 0) {
  // 		console.log('Protocol already exists');
  // 		return;
  // 	}
  // 	const { protocols: remoteProtocols, status: remoteProtocolStatus } =
  // 		await queryRemoteProtocol(web5, did, protocolUrl);
  // 	if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
  // 		const result = await installRemoteProtocol(
  // 			web5,
  // 			did,
  // 			protocolDefinition
  // 		);
  // 		console.log({ result });
  // 		console.log('Protocol installed remotely');
  // 	}
  // };
  // // const configureProtocol = async () => {
  // // 	// query the list of existing protocols on the DWN
  // // 	const { protocols, status } = await web5.dwn.protocols.query({
  // // 		message: {
  // // 			filter: {
  // // 				protocol: protocolDefinition.protocol,
  // // 			},
  // // 		},
  // // 	});

  // // 	if (status.code !== 200) {
  // // 		alert('Error querying protocols');
  // // 		console.error('Error querying protocols', status);
  // // 		return;
  // // 	}

  // // 	// if the protocol already exists, we return
  // // 	if (protocols.length > 0) {
  // // 		console.log('Protocol already exists');
  // // 		return;
  // // 	}

  // // 	// configure protocol on local DWN
  // // 	const { status: configureStatus, protocol } =
  // // 		await web5.dwn.protocols.configure({
  // // 			message: {
  // // 				definition: protocolDefinition,
  // // 			},
  // // 		});

  // // 	console.log('Protocol configured', configureStatus, protocol);
  // // };
  // useEffect(() => {
  // 	if (web5) {
  // 		configureProtocol(web5, myDid);
  // 	}
  // }, [web5, myDid]);
  // Memoize the getUser function
  const getUser = useCallback(async () => {
    setIsGettingUser(true);
    console.log("getting user");
    const { records } = await web5.dwn.records.query({
      message: {
        filter: {
          schema: protocolDefinition.types.patientInfo.schema,
        },
      },
    });

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

    if (records) {
      setIsGettingUser(false);
    }
    return userInfo;
  }, [web5, userInfo]); // Dependency array includes web5
  const getGuardianInfo = useCallback(async () => {
    setIsGettingUser(true);
    console.log("getting guardain info");
    const { records } = await web5.dwn.records.query({
      message: {
        filter: {
          schema: protocolDefinition.types.guardianInfo.schema,
        },
      },
    });

    // add entry to userInfo
    for (let record of records) {
      const data = await record.data.json();
      const list = { record, data, id: record.id };
      setguardianRecord((user) => {
        if (!user.some((item) => item.id === list.id)) {
          return [...user, list];
        }
        return user;
      });
    }

    if (records) {
      setIsGettingUser(false);
    }
  }, [web5]); // Dependency array includes web5

  // Trigger the getUser function on mount
  useEffect(() => {
    if (web5) {
      getUser();
      getGuardianInfo();
    }
  }, [getUser, getGuardianInfo, web5]);

  useEffect(() => {
    console.log(userInfo);
    console.log(guardianRecord);
    if (userInfo.length > 0) {
      setUser(userInfo[0].data);
      setUserRole(userInfo[0].data.personalInfo.role);
    }
    if (userInfo.length > 1) {
      console.log(userInfo[1].data.guardianInfo);
      setguardianRecord(userInfo[1].data.guardianInfo);
    }
    if (guardianRecord.length > 0) {
      console.log(guardianRecord);
      setGuardianInfo(guardianRecord[0].data.guardianInfo);
    }
  }, [userInfo, guardianRecord]);
  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };
  return (
    <AppContext.Provider
      value={{
        login,
        // setUser,
        user,
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
        fetchedTweets,
        setFetchedTweets,
        web5,
        setWeb5,
        myDid,
        setMyDid,
        userRole,
        setUserRole,
        getUser,
        isGettingUser,
        userRecord,
        setUserRecord,
        guardianRecord,
        setguardianRecord,
        guardianInfo,
        setGuardianInfo,
        userInfo,
        getGuardianInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(AppContext);
};
