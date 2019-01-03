import React, {Component} from 'react';

import {Text} from 'react-native';
import homeStore from '../store/homeStore';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";

@observer
export default class extends BaseComponent {

    // static navigationOptions = {
    //     // headerTitle instead of title
    //     headerTitle: <Text>123</Text>,
    // };

    constructor(props){
        super(props)
    }

    render() {
        return <Text style={{
            width: '100%', textAlign: 'center'
        }} onPress={() => {
            homeStore.addNumber()
            if (homeStore.number > 5)
                this.props.navigation.navigate('Second')
        }}>{homeStore.number}</Text>
    }
}