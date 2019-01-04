import React, {Component} from 'react';

import {View, Text} from 'react-native';
import homeStore from '../store/homeStore';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";
import {pages} from "../navigation/navigations";


import Screen from '../utils/screenUtil'

@observer
export default class extends BaseComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return <Screen.FixWidthView>
            <View>
                <Text style={{
                    width: '100%', textAlign: 'center', backgroundColor: "#dfdfdf"
                }} onPress={() => {
                    this.navTo(pages.second)
                }}>{homeStore.number}</Text>
                <Text style={{fontSize: 14}}>14</Text>
                <Text style={{width: 370, backgroundColor: "#556677"}}>370</Text>
                <Text style={{width: 375, backgroundColor: "#556677"}}>375</Text>
                <Text style={{width: 380, backgroundColor: "#556677"}}>180</Text>
            </View>
        </Screen.FixWidthView>
    }
}