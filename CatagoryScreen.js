import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import LoadingScreen from './LoadingScreen'

var myNavigate;

export default class CatagoryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response)=> response.json())
            .then((responseJson)=> {
                this.setState({
                    isLoading: false,
                    datasource: responseJson.movies
                }, function(){

                });
            }).catch((error)=>{
                Alert.alert('Not able to Connet to Server')
            });
    }

    static navigationOptions = {
        title: 'Select An App'
    }

    render() {

        if(this.state.isLoading){
            return(
                <LoadingScreen/>
            )
        }

        const { navigate } = this.props.navigation;
        myNavigate = navigate;
        
        return(

        <View style={myStyles.mainContainer}>
            <Text style={myStyles.headerStyle}>
                {this.props.navigation.state.params.catagoryTitle}
            </Text>
            <Image style = {{width:150, height: 150}}
                source={{uri: this.props.navigation.state.params.catagoryIcon}}/>
            <FlatList data={this.state.datasource} 
                renderItem={({item})=>
                <TouchableOpacity>
                  <View style={myStyles.subView}>
                    <Text style={myStyles.listStyle}>
                        {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>            }
            keyExtractor={({id}, index) => id}/>
        </View>             
        );
    }
}

const myStyles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'dodgerblue'
    },
    headerStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Menlo-Bold'
    },
    listStyle: {
        fontSize: 30,
        color: 'crimson',
        fontWeight: 'bold'
    },
    subView: {
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})