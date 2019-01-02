import React, {Component} from 'react';

import {Text} from 'react-native';

import {observer} from 'mobx-react';

@observer
export default class extends Component {
    render() {
        return <Text onPress={() => {
            this.props.navigation.navigate('Second')
        }}>page 2</Text>
    }
}