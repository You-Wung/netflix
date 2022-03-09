import '../styles/globals.css'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '../alert/basic-templete';
import store from '../store/index'

const options = {
  timeout: 5000,
  type: 'error',
  offset: '20px',
  position: positions.TOP_CENTER,
  transition: transitions.fade,
}

function MyApp({ Component, pageProps }) {
  return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...options}>
					<Component {...pageProps} />
				</AlertProvider>
			</Provider>
	);
}

export default MyApp
