import { Fragment } from 'react';
import classes from './PhonePart.module.css';
import Image from 'next/image';

import mobile from '../../img/mobile.jpeg';
import poster from '../../img/poster.png';
import loading from '../../img/loading.gif';

const PhonePart = () => {
	return (
		<Fragment>
			<div className={classes.general}>
				<div className={classes.image}>
					<Image src={mobile} alt="" />
					<div className={classes.bar}>
						<div className={classes.poster}>
							<Image src={poster} alt="" />
						</div>
						<div className={classes.posterExp}>
							<h2>Stranger Things</h2>
							<p>Downloading...</p>
						</div>
						<div className={classes.loading}>
							<Image src={loading} alt="" />
						</div>
					</div>
				</div>
				<div className={classes.letters}>
					<h1>Download your shows to watch offline.</h1>
					<p>Save your favorites easily and always have something to watch.</p>
				</div>
			</div>
			<div className={classes.underline} />
		</Fragment>
	);
};

export default PhonePart;