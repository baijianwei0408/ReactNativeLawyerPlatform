import {createStackNavigator} from 'react-navigation';

import Home from '../pages/home'
import Second from '../pages/second'

const AppNavigator = createStackNavigator(
    {
        Home: {screen: Home},
        Second: {screen: Second}
    },
    {
        initialRouteName: 'Home',
    }
);

export default AppNavigator
