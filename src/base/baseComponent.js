import React, {Component} from 'react';
import api from '../api'

export default class BaseComponent extends Component {

    static navigationOptions = {
        // header: null
    };

    constructor(props) {
        super(props)

        console.log(props.navigation)
        console.log(props.navigation.state.routeName)
    }

    request() {
        api.request()
    }

    navTo(url, params = null) {
        this.props.navigation.navigate(url, params)
    }

    navPush(url, params = null) {
        this.props.navigation.push(url, params)
    }

    navBack() {
        this.props.navigation.goBack()
    }

    getParams() {
        return this.props.navigation.state.params || {}
    }

}
