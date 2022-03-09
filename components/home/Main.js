import Image from "next/image";
import classes from "./Main.module.css";
import logo from "../../img/logo.png";
import { Fragment, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";

const signupURL =
	"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo";
const deleteURL =
	"https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo";

const Main = (props) => {
	const router = useRouter();
	const email = useRef("");
	const dispatch = useDispatch();
	const [emailValid, setEmailValid] = useState(false);
	const alert = useAlert();

	const signupHandler = () => {
		let token = "";
		const value = email.current.value;
		const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		if (exptext.test(value) === false) {
			setEmailValid(true);
		} else {
			setEmailValid(false);
			dispatch({ type: "SET_MAIL", email: value });
			fetch(signupURL, {
				method: "POST",
				body: JSON.stringify({
					email: value,
					password: "000000",
					returnSecureToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}).then((res) => {// 등록 후
				if (res.ok) {
					res
						.json()
						.then((data) => {// 성공(없는id)하면, 토큰을 가고 삭제를 fetch
							token = data.idToken;
							return fetch(deleteURL, {//리턴 시 then 하나 탈출
								method: "POST",
								body: JSON.stringify({
									idToken: token,
								}),
								headers: {
									"Content-Type": "application/json",
								},
							});
						})
						.then((res) => {
							if (res.ok) {//삭제까지 ok 시, 가입하는 곳으로 ㄱㄱ
								router.push("/signup");
							} else {
								res.json().then((data) => {
									console.log(data);
									alert.show("error-code 2: Unkown error occurred.");
								});
							}
						});
				} else {// 에러(중복메일) 시
					res.json().then((data) => {
						const error_message = data.error.message;
						if (error_message === "EMAIL_EXISTS") {
							alert.show("Email is already existing. Please try again.");
						} else {
							alert.show("error-code 1: Unkown error occurred.");
						}
					});
				}
			});
		}
	};

	const enterHandler = (event) => {
		if (event.key === "Enter") signupHandler();
	};

	return (
		<Fragment>
			<div className={classes.general}>
				<div className={classes.background} />
				<div className={classes.logo}>
					<Image src={logo} alt="" />
				</div>
				<button className={classes.button} onClick={props.signinHandler}>
					Sign in
				</button>
				<div className={classes.summary}>
					<h1>Unlimited movies, TV shows, and more.</h1>
					<br />
					<h3>Watch anywhere. Cancel anytime.</h3>
					<br />
					<h4>
						Ready to watch? Enter your email to create or restart your
						membership.
					</h4>
					<input
						className={emailValid ? classes.emailRequired : ""}
						type="id"
						id="id"
						ref={email}
						onKeyPress={enterHandler}
						required
					/>
					<label>
						<span>Email Address</span>
					</label>
					<button onClick={signupHandler}>Get Started &gt;</button>
					{emailValid && <p>email required!</p>}
				</div>
			</div>
			<div className={classes.underline} />
		</Fragment>
	);
};
export default Main;
