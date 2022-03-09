import { Transition } from "react-transition-group";
import { Fragment, useState, useRef } from "react";
import classes from "./Questions.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const signupURL =
	"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo";
const deleteURL =
	"https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyCFgkd8MygWpPlWV0z1UzXEYeAJdb-DcEo";

const answer = [
	"",
	"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week",
	"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from KRW9,500 to KRW17,000 a month. No extra costs, no contracts!",
	"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere",
	"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime",
	"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want",
	"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see",
];

const Questions = props => {
	const router = useRouter();
	const dispatch = useDispatch();
	const email = useRef('');
	const [num, setNum] = useState(0);
	const [emailValid, setEmailValid] = useState(false);

	const enterHandler = (event) => {
		if(event.key === 'Enter')
			signupHandler();
	};

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

	const clickHandler = (event) => {
		if (num === +event.target.id) setNum(0);
		else setNum(+event.target.id);
	};

	const transitionWithNum = (number) => {
		const sens = answer[number].split(".");
		for (let i = 0; i < sens.length; i++) {
			if (sens[i].charAt(sens[i].length - 1) !== "!" && sens[i] !== "")
				sens[i] = sens[i] + ".";
		}
		const jsxx = sens.map((sentence, index) => <p key={index}>{sentence}</p>);
		return (
			<Transition in={num === number} timeout={500} mountOnEnter unmountOnExit>
				{(state) => (
					<div
						style={{
							transition: "max-height .5s ease-out",
							maxHeight: state === "exiting" ? "0" : "30rem",
						}}
						className={classes.exp}
					>
						{jsxx}
					</div>
				)}
			</Transition>
		);
	};

	return (
		<Fragment>
			<div className={classes.general}>
				<h1>Frequently Asked Questions</h1>
				<div className={classes.list}>
					<ul>
						<li id="1" onClick={clickHandler}>
							What is Netflix?
							<button className={num === 1 ? classes.btn : classes.btn2} />
						</li>
						{transitionWithNum(1)}
						<li id="2" onClick={clickHandler}>
							How much does Netflix cost?
							<button className={num === 2 ? classes.btn : classes.btn2} />
						</li>
						{transitionWithNum(2)}
						<li id="3" onClick={clickHandler}>
							Where can i watch?
							<button className={num === 3 ? classes.btn : classes.btn2} />
						</li>
						{transitionWithNum(3)}
						<li id="4" onClick={clickHandler}>
							How do i cancel?
							<button className={num === 4 ? classes.btn : classes.btn2} />
						</li>
						{transitionWithNum(4)}
						<li id="5" onClick={clickHandler}>
							What can i watch on Netflix?
							<button className={num === 5 ? classes.btn : classes.btn2} />
						</li>
						{transitionWithNum(5)}
						<li id="6" onClick={clickHandler}>
							Is Netflix good for kids?
							<button className={num === 6 ? classes.btn : classes.btn2} />
						</li>
						{transitionWithNum(6)}
					</ul>
				</div>
				<div className={classes.mail}>
					<h2>
						Ready to watch? Enter your email to create or restart your
						membership.
					</h2>
					<input
						className={emailValid ? classes.emailRequired : ""}
						ref={email}
						type="id"
						id="id"
						required
						onKeyPress={enterHandler}
					/>
					<label>
						<span>Email Address</span>
					</label>
					<button onClick={signupHandler}>Get Started &gt;</button>
					{emailValid && <p className={classes.email}>email required!</p>}
				</div>
			</div>
			<div className="underline" />
		</Fragment>
	);
};

export default Questions;
