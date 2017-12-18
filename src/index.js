import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarComponent from './components/AppBar.jsx';

const MaterialUITheme = () => (
	<MuiThemeProvider>
		<AppBarComponent />
		<App />
	</MuiThemeProvider>
);

ReactDOM.render(<MaterialUITheme />, document.getElementById('root'));
registerServiceWorker();
