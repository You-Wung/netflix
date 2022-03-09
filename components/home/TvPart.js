import Image from "next/image";
import { Fragment } from "react";
import tv from '../../img/tv.png';
import classes from './TvPart.module.css';

const TvPart = () => {
	return (
		<Fragment>
			<div className={classes.general}>
				<div className={classes.letters}>
					<h1>Enjoy on your TV.</h1>
					<p>
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</p>
				</div>
				<div className={classes.tv}>
					<Image className={classes.image} src={tv} alt="" />
					<video className={classes.video} loop autoPlay muted>
						<source src="/inthetv.m4v" autoPlay />
					</video>
				</div>
			</div>
			<div className={classes.underline} />
		</Fragment>
	);
};

export default TvPart;