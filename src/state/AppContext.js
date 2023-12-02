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

	// web5
	const [web5, setWeb5] = useState(null);
	const [myDid, setMyDid] = useState(null);
	const [didDocument, setDidDocument] = useState({});
	useEffect(() => {
		const existingDid = localStorage.getItem('myDid');

		const getObject = async () => {
			// const { web5: userWeb } = await Web5.connect(existingDid);
			// console.log(userWeb);
			const { web5, did } = await Web5.connect({
				techPreview: {
					dwnEndpoints: ['http://localhost:3000/'],
				},
			});
			// setMyDid(existingDid);
			// setWeb5(userWeb);
			setMyDid(did);
			setWeb5(web5);
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
		if (protocols.length > 0) {
			console.log('Protocol already exists');
			return;
		}

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
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => {
	return useContext(AppContext);
};
