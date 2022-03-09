import { useState, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Exp from "./Exp";
import classes from "./SecondModal.module.css";

const signupURL =
	"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo";

const SecondModal = (props) => {
	const dispatch = useDispatch();
	const passwd = useRef(null);
	const reduxCtx = useSelector((state) => state);
	const [checked, setChecked] = useState();
	const [passwdCheck, setPasswdCheck] = useState();
	const GottenMail = reduxCtx ? reduxCtx.email : "";

	const checkboxHandler = () => {
		setChecked((prev) => !prev);
	};

	const nextHandler = () => {
		const pw = passwd.current.value;

		if (checked === false || checked === undefined) {
			setChecked(false);
		}
		if (passwdCheck === false || passwdCheck === undefined) {
			setPasswdCheck(false);
		}
		if (checked && passwdCheck) {
			fetch(signupURL, {
				method: "POST",
				body: JSON.stringify({
					email: reduxCtx.email,
					password: pw,
					returnSecureToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}).then((res) => {
				if (res.ok) {
					res.json().then(data=>{
						dispatch({type: 'SET_TOKEN', emailToken: data.idToken});
					});
					props.nextHandler();
				} else {
					return res.json().then((data) => {
						console.log(data.error.message);
						alert.show("error-code 3: Unkown error occurred.");
					});
				}
			});
		}
	};

	const passwdChangeHandler = () => {
		const pw = passwd.current.value;
		if (pw.length > 5 && pw.length < 21) setPasswdCheck(true);
	};

	return (
		<Fragment>
			<div style={props.style} className={classes.modal}>
				<a>STEP 2 OF 3</a>
				<h1>Create a password to start your membership</h1>
				<p>
					Just a few more steps and you&apos;re done! We hate paperwork, too.
				</p>
				<div>
					<div className={classes.readOnly}>
						<input type="email" id="id" value={GottenMail} readOnly required />
						<label>
							<span className={classes.readOnly}>Email Address</span>
						</label>
					</div>
					<div className={classes.inputs}>
						<input
							className={passwdCheck === false ? classes.redBord : ""}
							type="password"
							id="password"
							ref={passwd}
							onChange={passwdChangeHandler}
							required
						/>
						<label>
							<span>Password</span>
						</label>
						{passwdCheck === false && (
							<p>Password should be between 6 and 20 characters</p>
						)}
						<div className={classes.check}>
							<input
								className={checked === false ? classes.redBord : ""}
								onClick={checkboxHandler}
								type="checkbox"
								name="checkbox"
							/>
							<label>
								Yes, I consent to collection and use of my personal information
								in accordance with the Privacy Statement.
							</label>
						</div>
						{checked === false && (
							<div className={classes.a}>
								<a>
									You must agree to the required terms and conditions to
									continue.
								</a>
							</div>
						)}
					</div>
					<button onClick={nextHandler}>Next</button>
				</div>
			</div>
			<Exp />
		</Fragment>
	);
};

export default SecondModal;
