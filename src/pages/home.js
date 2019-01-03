import React, {Component} from 'react';

import {View, Text} from 'react-native';
import homeStore from '../store/homeStore';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";

@observer
export default class extends BaseComponent {


    static navigationOptions = {
        title: '首页',
        headerTitleStyle: {
            flex: 1, textAlign: 'center'
        },
    };


    constructor(props) {
        super(props)
    }

    render() {
        return <View>
            <Text style={{
                width: '100%', textAlign: 'center', backgroundColor: "#334455"
            }} onPress={() => {
                this.props.navigation.navigate("Third")
            }}>{homeStore.number}</Text>
        </View>
    }
}