import React, {Component} from 'react';

import {Text} from 'react-native';
import homeStore from '../store/homeStore';

import {observer} from 'mobx-react';

@observer
export default class extends Component {
    render() {
        return <Text onPress={()=>{
            homeStore.addNumber()
        }}>{homeStore.number}</Text>
    }
}