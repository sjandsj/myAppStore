import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SummaryScreen extends Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={myStyles.mainContainer}>
                <Text style={myStyles.headerStyle}>
                    {this.props.navigation.state.params.summaryTitle}
                </Text>
                <Text style={myStyles.textStyle}>
                    {this.props.navigation.state.params.summary}
                </Text>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerStyle: {
        top: 20,
        fontSize: 70,
        color: 'dodgerblue',
        fontWeight: 'bold',
        fontFamily: 'RockWell'
    },
    textStyle: {
        padding: 15,
        fontFamily: 'Times New Roman',
        fontSize: 20,
        color: 'orangered'
    }
})
