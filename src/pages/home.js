import React, {Component} from 'react';

import {View, Text} from 'react-native';
import homeStore from '../store/homeStore';

import {observer} from 'mobx-react';
import BaseComponent from "../base/baseComponent";
import {pages} from "../navigation/navigations";

@observer
export default class extends BaseComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return <View>
            <Text style={{
                width: '100%', textAlign: 'center', backgroundColor: "#dfdfdf"
            }} onPress={() => {
                this.navTo(pages.second)
            }}>{homeStore.number}</Text>
            <Text style={{fontSize: 14}}>14</Text>
            <Text style={{fontSize: 16}}>16</Text>
            <Text style={{fontSize: 18}}>18</Text>
            <Text style={{fontSize: 20}}>20</Text>
            <Text style={{fontSize: 22}}>22</Text>
            <Text style={{fontSize: 24}}>24</Text>
            <Text style={{fontSize: 26}}>26</Text>
            <Text style={{fontSize: 28}}>28</Text>
            <Text style={{fontSize: 30}}>30</Text>

            <Text style={{width: 375, backgroundColor: "#223344"}}>375</Text>
            <Text style={{width: 380, backgroundColor: "#334455"}}>380</Text>
            <Text style={{width: 390, backgroundColor: "#445566"}}>390</Text>
            <Text style={{width: 392, backgroundColor: "#445566"}}>392</Text>
            <Text style={{width: 393, backgroundColor: "#445566"}}>393</Text>
            <Text style={{width: 395, backgroundColor: "#445566"}}>395</Text>
            <Text style={{width: 396, backgroundColor: "#445566"}}>396</Text>
            <Text style={{width: 398, backgroundColor: "#445566"}}>398</Text>
            <Text style={{width: 400, backgroundColor: "#556677"}}>400</Text>
            <Text style={{width: 410, backgroundColor: "#556677"}}>410</Text>
            <Text style={{width: 420, backgroundColor: "#556677"}}>420</Text>
        </View>
    }
}