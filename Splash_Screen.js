import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return(
            <View style={myStyle.mainContainer}>
                <Text style={myStyle.textStyle}>
                    My App 
                </Text>
                <Text style={myStyle.textStyle}>
                    Store
                </Text>
            </View>
        );
    }
}

const myStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,     
        backgroundColor: 'indianred',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    backgroundImage: {
        height: 250,
        width: 250
    },
    textStyle: {
        color: 'gold',
        fontSize: 80,
        fontFamily: 'Noteworthy-Bold',
        fontWeight: 'bold'
    }

})