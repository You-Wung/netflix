import { useSelector } from 'react-redux';
import BrowseNav from './BrowseNav';
import Profile from './Profile';
import classes from './Browse.module.css';
import { Fragment, useState } from 'react';
import VidHome from './VidHome';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Browse = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [showProf, setShowProf] = useState(true);
	const [nameClicked, setNameClicked] = useState('');

	const state = useSelector((state) => state);
	//console.log(state);

	const moveToVid = (clickedName) => {
		console.log(clickedName);
		setNameClicked(clickedName);
		setShowProf(false);
	};

	const signoutHandler = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('id');
		dispatch({type: 'SIGNOUT'});
		router.push('/login');
	};

	return (
		<div className={showProf ? classes.divForProf : ""}>
			{showProf && (
				<Fragment>
					<BrowseNav signoutHandler={signoutHandler} />
					<Profile moveToVid={moveToVid} />
				</Fragment>
			)}
			{!showProf && (
				<VidHome name={nameClicked} signoutHandler={signoutHandler}/>
			)}
		</div>
	);
};

export default Browse;