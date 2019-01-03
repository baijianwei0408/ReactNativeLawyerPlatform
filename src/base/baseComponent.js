import React, {Component} from 'react';

import {Text} from 'react-native'

export default class BaseComponent extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        header: null
    };

    constructor(props) {
        super(props)

        console.log(props.navigation)
        console.log(props.navigation.state.routeName)
    }

}
