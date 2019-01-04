import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";

@observer
export default class extends BaseComponent {

    static navigationOptions = {
        title: '第三页',
        headerTitleStyle: {
            flex: 1, textAlign: 'center'
        },
        headerRight: <View><Text>rightttttttt</Text></View>
    };

    render() {
        return <Text onPress={() => {
            this.props.navigation.navigate('Second')
        }}>page 33333</Text>
    }
}