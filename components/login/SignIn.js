import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from "react-alert";
import { useRouter } from 'next/router';
import classes from './Signin.module.css';
import Link from 'next/link';
import { getDatabase, ref, update } from "firebase/database";
import '../../store/firebase';

const signinURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo";

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;
	return remainingDuration;
};

const Signin = () => {
	const router = useRouter();
	const alert = useAlert();
	const dispatch = useDispatch();
	const email = useRef();
	const pw = useRef();

	const db = getDatabase();//*

	const signinHanlder = () => {
		const id = email.current.value;
		const password = pw.current.value;

		fetch(signinURL, {
			method: "POST",
			body: JSON.stringify({
				email: id,
				password,
				returnSecureToken: true,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			if (res.ok) {
				dispatch({type: 'SUCCESS', loginEmail: id});
				res.json().then(data => {	
					const replacedMail = id.replace('.', ',');

					localStorage.setItem('token', data.idToken);
					localStorage.setItem('id', replacedMail);

					const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000)
					const remainingTime = calculateRemainingTime(expirationTime.toISOString());
					setTimeout(() => {

						localStorage.removeItem('token');
						localStorage.removeItem('id');
						
					}, remainingTime);
					const updates = {};
					updates['/user/' + replacedMail] = {email: replacedMail, token: data.idToken};
					update(ref(db), updates);
					router.push('/browse');
				});
			} else {
				alert.show("error-code 4: Try again.");
			}
		});
	};

	const enterHandler = (event) => {
		if (event.key === "Enter") signinHanlder();
	};

	return (
		<div className={classes.login} onKeyPress={enterHandler}>
			<h1>Sign In</h1>

			<input ref={email} type="id" name="txt" required />
			<label>
				<span>Enter your email</span>
			</label>

			<input ref={pw} type="password" name="pw" required />
			<label>
				<span>Password</span>
			</label>

			<button onClick={signinHanlder}>Sign In</button>
			<div className={classes.underLogin}>
				<p>
					New to Netflix?{" "}
					<Link href="/">
						<a style={{ color: "white" }}>Sign up now.</a>
					</Link>
				</p>
				
			</div>
		</div>
	);
};

export default Signin;