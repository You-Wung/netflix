import { useRouter } from 'next/router';
import Signin from './SignIn';
import logo from '../../img/logo.png';
import Image from 'next/image';
import SigninExp from './SigninExp';
import classes from './LoginBg.module.css';
const LoginBg = () => {
	const router = useRouter();
	
	const logoClickHandler = () => {
		router.push('/');
	};
	
	return (
		<div className={classes.general}>

			<div className={classes.background} />

			<div className={classes.logo}>
				<Image onClick={logoClickHandler} src={logo} alt="" />
			</div>

			<Signin />
			<SigninExp />
		</div>
	);
};

export default LoginBg;