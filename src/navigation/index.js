import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from '../pages/home'

const AppNavigator = createStackNavigator(
    {
        Home: Home
    },
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator