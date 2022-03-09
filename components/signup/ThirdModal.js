import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Exp from "./Exp";
import classes from "./ThirdModal.module.css";
import { useSelector } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
//import database from '../../store/firebase';

const ThirdModal = (props) => {
	const router = useRouter();
	const emailToken = useSelector((state) => state.emailToken);
	const email = useSelector((state) => state.email);
	const db = getDatabase();

	const emailReplaced = email.replace('.', ',');
	useEffect(() => {
		set(ref(db, "user/" + emailReplaced), { email: emailReplaced, token: emailToken });
		set(ref(db, "browse/" + emailReplaced), { user: { img: "https://occ-0-993-1360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFMAEDzrjFngWzmfzjBwDCp5aArul_aesBXbpYZgdo9FSha3M71rrn_IpfzTfPwpJIAN_zMpj9UOfJXwvOnvDL3OFCA.png?r=f16" } });
	}, []);

	const clickHandler = () => {
		router.push("/login");
	};

	return (
		<Fragment>
			<div style={props.style} className={classes.modal}>
				<div className={classes.check} />
				<a>STEP 3 OF 3</a>
				<h1>Enjoy well !</h1>
				<div className={classes.list}>
					<p>✓</p>
					<h5>No commitments, cancel anytime.</h5>
				</div>
				<div className={classes.list}>
					<p>✓</p>
					<h5>Everything on Netflix for one low price.</h5>
				</div>
				<div className={classes.list}>
					<p>✓</p>
					<h5>Unlimited viewing on all your devices.</h5>
				</div>
				<button onClick={clickHandler}>Sign In</button>
			</div>
			<Exp />
		</Fragment>
	);
};

export default ThirdModal;
