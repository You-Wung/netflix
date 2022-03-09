import { Fragment } from 'react';
import Image from 'next/image';
import classes from './DevicePart.module.css';
import device from '../../img/device.png';


const DevicePart = () => {
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
				<div className={classes.device}>
					<Image className={classes.image} src={device} alt="" />
					<video className={classes.video} loop autoPlay muted>
						<source src="/vid_in_device.m4v" autoPlay />
					</video>
				</div>
			</div>
			<div className={classes.underline} />
		</Fragment>
	);
};
export default DevicePart;
