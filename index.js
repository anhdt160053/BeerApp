
import {AppRegistry} from 'react-native';
// import App from './src/App';
import {name as appName} from './app.json';
// import Login from './src/screens/auth/Login/Login';
// import Splash from './src/screens/Splash/Splash';
// import Login from './src/screens/auth/Login/Login';
import Header from './src/components/Header';

AppRegistry.registerComponent(appName, () => Header);
