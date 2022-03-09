import classes from './SigninExp.module.css';

const SigninExp = () => {
	return (
		<div className={classes.modal}>
			<div className={classes.exp}>
				<p>
					Question?&nbsp;Call&nbsp;&nbsp;
					<a href="tel:010-2664-1942">010-2664-1942</a>
					&nbsp;or Mail&nbsp;&nbsp;
					<a href="mailto:y7k7380@naver.com">y7k7380@naver.com</a>
				</p>

				<div className={classes.wrapper}>
					<div className={classes.item}>
						<a>FAQ</a>
					</div>
					<div className={classes.item}>
						<a>Help Center</a>
					</div>
					<div className={classes.item}>
						<a>Terms of Use</a>
					</div>
					<div className={classes.item}>
						<a>Privacy</a>
					</div>
					<div className={classes.item}>
						<a>Cookie Preference</a>
					</div>
					<div className={classes.item}>
						<a>Corporate Information</a>
					</div>
				</div>
				<br />
				<p>Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588</p>
				<p>Representative: Reginald Shawn Thompson</p>
				<p>Email: korea@netflix.com</p>
				<p>Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea</p>
				<p>Business registration number: 165-87-00119</p>
				<p>Hosted by: Amazon Web Services Inc.</p>
				<p>KFTC website</p>

			</div>
		</div>
	);
};

export default SigninExp;