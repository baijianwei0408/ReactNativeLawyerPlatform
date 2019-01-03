import React, {Component} from 'react';

import {Text} from 'react-native'

export default class BaseComponent extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Text>123</Text>,
    };

    constructor(props) {
        super(props)

        console.log(props.navigation)
        console.log(props.navigation.state.routeName)
    }

}
