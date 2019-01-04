import Home from "../pages/home"
import Second from "../pages/second"
import Third from "../pages/third"



const pages = {
    home: {
        title: "律政时代",
        isBottomTab: true,
        children: {
            home: {
                tabName: "首页",
                screen: Home
            },
            second: {
                tabName: "二页",
                screen: Second
            }
        },
    },
    third: {
        title: "第三页",
        screen: Third
    },
}

export default pages