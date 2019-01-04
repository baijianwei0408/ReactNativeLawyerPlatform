import Home from "../pages/home"
import Second from "../pages/second"
import Third from "../pages/third"


const registerNavigation = {
    home: {
        title: "律政时代",
        isBottomTab: true,
        children: {
            home: {
                navigationOptions: {
                    tabBarLabel: '首页',
                },
                screen: Home
            },
            second: {
                navigationOptions: {
                    tabBarLabel: '二页',
                },
                screen: Second
            }
        },
    },
    third: {
        title: "第三页", screen: Third
    },
}

const pages = {
    home: 'home',
    second: 'second',
    third: 'third',
}


// const navigation = {
//     registerNavigation,
//     registerPage
// }

export {registerNavigation, pages}