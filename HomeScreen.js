import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import SplashScreen from './Splash_Screen'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            isLoading: true
        }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response)=>response.json()).then((responseJson)=>{
            this.setState({
                isLoading: false, 
                dataSource: responseJson.movies }, function(){

                });            
        }).catch((error)=>{
            Alert.alert('Error : ',error);
        });

    }

    render() {

        if(this.state.isLoading) {
            return(
                <SplashScreen/>
            );
        }
        return(
            <View style={myStyles.mainContainer}>
                <FlatList style={myStyles.flatListStyle} data={this.state.dataSource} 
                          renderItem={({item})=><TouchableOpacity style={myStyles.buttonStyle}>
                            <Button color='red' 
                                style={{fontSixe: 30}}
                                title={item.title}/>
                            
                            </TouchableOpacity> } 
                        keyExtractor={({id}, index)=> id}
                        />
              
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    buttonStyle: {
        flex: 1, 

    },
    flatListStyle: {
        margin: 0,
        padding: 0,
        backgroundColor: 'yellow',
        
    }
})