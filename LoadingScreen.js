import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default class LoadingScreen extends Component {

    render(){
        return(
            <View style={{flex: 1, 
                backgroundColor: 'yellow',
                justifyContent: 'space-evenly',
                alignItems: 'center'}}>
                <Text style={{fontSize: 70,
                    fontFamily: 'Party LET',
                    fontWeight: 'bold',
                    color: 'firebrick'}}>
                    Loading
                </Text>
                <ActivityIndicator color='chocolate' size='large'/>
            </View>
        );
    }
}