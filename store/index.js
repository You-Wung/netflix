import { createStore } from "redux";

const initialStore = {email: null, emailToken: null, loginEmail: ''};

const reducer = (state = initialStore, action) => {
	if (action.type === "SET_MAIL")
		return { ...state, email: action.email };
	if (action.type === 'SET_TOKEN')
		return { ...state, emailToken: action.emailToken };
	if (action.type === 'SUCCESS')
		return { ...state, loginEmail: action.loginEmail };
	if (action.type === 'SIGNOUT')
		return { ...state, loginEmail: null };
}

const store = createStore(reducer);

export default store;
