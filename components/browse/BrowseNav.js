import classes from './BrowseNav.module.css';
import Image from 'next/image';
import logo from '../../img/logo.png';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BrowseNav = (props) => {
	const idToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const router = useRouter();

	useEffect(() => {
		if (!idToken)
			router.push('/login');
	}, [idToken, router]);

	return (
		<div className={classes.nav}>
			<div className={classes.logo}>
				<Image onClick={e=>{router.push('/browse')}} src={logo} alt="" />
			</div>
			<button onClick={props.signoutHandler}>Sign out</button>
		</div>
	);
};
export default BrowseNav;