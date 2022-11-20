import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

// config store redux
import store from './store/store';
import App from './App';
// set up axios default
import axiosConfigCommon from './config/axiosConfigCommon';
axiosConfigCommon();
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
