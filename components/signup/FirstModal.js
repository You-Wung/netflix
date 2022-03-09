import Image from "next/image";
import devices from "../../img/devices.png";
import classes from "./FirstModal.module.css";
import Exp from "./Exp";
import { Fragment } from "react";

const FirstModal = (props) => {
	return (
		<Fragment>
			<div style={props.style} className={classes.modal}>
				<div className={classes.devices}>
					<Image src={devices} alt="" />
				</div>
				<p>STEP 1 OF 3</p>
				<h2>Finish setting up your account</h2>
				<h5>
					Netflix is personalized for you. Create a password to watch on any
					device at any time.
				</h5>
				<button onClick={props.nextHandler}>Next</button>
			</div>
			<Exp />
		</Fragment>
	);
};

export default FirstModal;
