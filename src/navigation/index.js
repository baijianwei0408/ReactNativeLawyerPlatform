import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from '../pages/home'
import Second from '../pages/second'

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Second: Second
    },
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator