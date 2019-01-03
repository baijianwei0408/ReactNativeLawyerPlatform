import React, {Component} from 'react';

export default class BaseComponent extends Component {

    static navigationOptions = {
        // header: null
    };

    constructor(props) {
        super(props)

        console.log(props.navigation)
        console.log(props.navigation.state.routeName)
    }

}
