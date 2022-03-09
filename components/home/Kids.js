import classes from './Kids.module.css';
import Image from 'next/image';
import { Fragment } from 'react';
import kids from '../../img/kids.png';

const Kids = () => {
	return (
		<Fragment>
			<div className={classes.general}>
				<div className={classes.image}>
					<Image src={kids} alt="" />
				</div>
				<div className={classes.letters}>
					<h1>Create profiles for kids.</h1>
					<p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
				</div>
			</div>
			<div className={classes.underline} />
		</Fragment>
	);
};

export default Kids;