import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from '../pages/home'
import Second from '../pages/second'
import Third from '../pages/third'

import navigations from './navigations'


function getNavigation() {
    let registerNavigation = navigations.registerNavigation
    let navigator = {}

    for (let key in registerNavigation) {
        let page = registerNavigation[key]
        if (page.isBottomTab === true) {
            // 底部有tabs的navigation
            let children = page.children
            let tabsView = createBottomTabNavigator(children)
            tabsView.navigationOptions = {
                title: page.title || "律政时代",
                headerTitleStyle: {
                    flex: 1, textAlign: 'center'
                }
            }
            navigator[key] = {screen: tabsView}
        } else {
            //正常navigation
            navigator[key] = {screen: page.screen}
        }
    }
    return navigator
}


// const HomeNavigation = createBottomTabNavigator({
//     Home: {screen: Home},
//     Second: {screen: Second}
// })
// HomeNavigation.navigationOptions = {
//     title: '首页',
//     headerTitleStyle: {
//         flex: 1, textAlign: 'center'
//     },
// };

const AppNavigator = createAppContainer(
    createStackNavigator(
        getNavigation()
    )
)

export default AppNavigator
