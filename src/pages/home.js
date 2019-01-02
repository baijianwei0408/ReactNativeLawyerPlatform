import React, {Component} from 'react';

import {Text} from 'react-native';
import homeStore from '../store/homeStore';

import {observer} from 'mobx-react';

@observer
export default class extends Component {

    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Text>123</Text>,
    };

    render() {
        return <Text onPress={()=>{
            homeStore.addNumber()
            if(homeStore.number > 5)
                this.props.navigation.navigate('Second')
        }}>{homeStore.number}</Text>
    }
}