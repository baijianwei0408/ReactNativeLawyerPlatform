import React, {Component} from 'react';

import {Text} from 'react-native';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";

@observer
export default class extends BaseComponent {
    render() {
        return <Text onPress={() => {
            this.props.navigation.navigate('Second')
        }}>page 2</Text>
    }
}