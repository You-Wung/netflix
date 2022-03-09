import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Signup.module.css';
import logo from '../../img/logo.png';
import { Transition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import FirstModal from './FirstModal';
import SecondModal from './SecondModal';
import ThirdModal from './ThirdModal';

const Signup = () => {
	const [num, setNum] = useState(0);
	const router = useRouter();
	const state = useSelector(state => state);

	useEffect(() => {
		if (!state || state.email === '')
			router.push('/');
	}, [router, state]);

	const nextHandler = () => {
		setNum(prev => prev + 1);
	};

	const logoClickHandler = () => {
		router.push('/');
	};

	return (
		<div style={{backgroundColor: "white"}}>
			<div className={classes.nav}>
				<div className={classes.logo}>
					<Image onClick={logoClickHandler} src={logo} alt="" />
				</div>
				<Link href="/login">
					<a>Sign In</a>
				</Link>
			</div>
			<Transition in={num === 0} timeout={500} mountOnEnter unmountOnExit>
				{(state) => (
					<FirstModal
						style={{
							transition: "all .5s",
							opacity: state === "exiting" ? "0" : "1",
							transform: state === "exiting" ? "translateX(-10%)" : "",
						}}
						nextHandler={nextHandler}
					/>
				)}
			</Transition>
			<Transition in={num === 1} timeout={500} mountOnEnter unmountOnExit>
				{(state) => (
					<SecondModal
						style={{
							transition: "all .5s",
							opacity: state === "entering" ? "0" : "1",
							transform: state === "entering" ? "translateX(20%)" : "",
						}}
						nextHandler={nextHandler}
					/>
				)}
			</Transition>
			<Transition in={num === 2} timeout={500} mountOnEnter unmountOnExit>
			{(state) => (
					<ThirdModal
						style={{
							transition: "all .5s",
							opacity: state === "entering" ? "0" : "1",
							transform: state === "entering" ? "translateX(20%)" : "",
						}}
						nextHandler={nextHandler}
					/>
				)}
			</Transition>
		</div>
	);
};
export default Signup;
