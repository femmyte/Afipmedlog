'use client';
import { useContext, useEffect, createContext, useRef, useState } from 'react';
import { Web5 } from '@web5/api';
import protocolDefinition from '@/protocols/healthRecord.json';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	let login = false;
	const [user, setUser] = useState('');
	const scrollContainerRef = useRef(null);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState();
	const [screenSize, setScreenSize] = useState(undefined);
	const [darkToggle, setDarkToggle] = useState(false);
	const [openLogoutModal, setOpenLogoutModal] = useState(false);
	const [fetchedTweets, setFetchedTweets] = useState([]);
	const [userRole, setUserRole] = useState('');
	const [userInfo, setUserInfo] = useState([]);
	const [record, setRecord] = useState([]);
	const [isGettingUser, setIsGettingUser] = useState(false);
	// web5
	const [web5, setWeb5] = useState(null);
	const [myDid, setMyDid] = useState(null);
	const [didDocument, setDidDocument] = useState({});
	useEffect(() => {
		const existingDid = localStorage.getItem('myDid');

		const getObject = async () => {
			// Local dwN
			// const { web5, did } = await Web5.connect({
			// 	techPreview: {
			// 		dwnEndpoints: ['http://localhost:3000/'],
			// 	},
			// });
			// setMyDid(did);
			// setWeb5(web5);
			// Online DWN
			const { web5: userWeb } = await Web5.connect(existingDid);
			// console.log(userWeb);
			setMyDid(existingDid);
			setWeb5(userWeb);
		};

		getObject();
	}, []);
	const configureProtocol = async () => {
		// query the list of existing protocols on the DWN
		const { protocols, status } = await web5.dwn.protocols.query({
			message: {
				filter: {
					protocol: protocolDefinition.protocol,
				},
			},
		});

		if (status.code !== 200) {
			alert('Error querying protocols');
			console.error('Error querying protocols', status);
			return;
		}

		// if the protocol already exists, we return
		// if (protocols.length > 0) {
		// 	console.log('Protocol already exists');
		// 	return;
		// }

		// configure protocol on local DWN
		const { status: configureStatus, protocol } =
			await web5.dwn.protocols.configure({
				message: {
					definition: protocolDefinition,
				},
			});

		console.log('Protocol configured', configureStatus, protocol);
	};
	useEffect(() => {
		if (web5) {
			configureProtocol();
		}
	}, [web5]);
	const getUser = async () => {
		setIsGettingUser(true);
		console.log('getting user');
		const { records } = await web5.dwn.records.query({
			message: {
				filter: {
					schema: protocolDefinition.types.patientInfo.schema,
				},
				dateSort: 'createdAscending',
			},
		});
		// add entry to userInfo
		for (let record of records) {
			const data = await record.data.json();
			const list = { record, data, id: record.id };
			// console.log(list);
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
	};
	useEffect(() => {
		if (web5) {
			getUser();
		}
	}, [web5]);

	useEffect(() => {
		console.log(userInfo[0]);

		if (userInfo.length > 0) {
			setUser(userInfo[0].data);
			setUserRole(userInfo[0].data.personalInfo.role);
			// router.push(`/${userInfo[0].data.personalInfo.role}/overview`);
		}
	}, [userInfo]);
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
				myDid,
				userRole,
				setUserRole,
				getUser,
				isGettingUser,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => {
	return useContext(AppContext);
};
