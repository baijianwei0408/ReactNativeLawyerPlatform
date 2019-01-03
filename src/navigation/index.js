import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from '../pages/home'
import Second from '../pages/second'
import Third from '../pages/third'

const HomeNavigation = createBottomTabNavigator({
    Home: {screen: Home},
    Second: {screen: Second}
})
HomeNavigation.navigationOptions = {
    title: '首页',
    headerTitleStyle: {
        flex: 1, textAlign: 'center'
    },
};

const AppNavigator = createAppContainer(
    createStackNavigator(
        {
            Home: {screen: HomeNavigation},
            Third: {screen: Third},
        }
    )
)

export default AppNavigator
