import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";

@observer
export default class extends BaseComponent {

    static navigationOptions = {
        title: '第二页',
        headerTitleStyle: {
            flex: 1, textAlign: 'center'
        },
        headerRight: <View/>
    };

    render() {
        console.log(this.getParams())
        console.log(this.getParams())
        console.log(this.getParams())
        console.log(this.getParams())
        console.log(this.getParams())

        return <Text onPress={() => {
            this.props.navigation.navigate('third')
        }}>page 2</Text>
    }
}