import React, { Component } from 'react';
import { ScrollView, ImageBackground, Alert, StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import SplashScreen from './Splash_Screen'

var myNavigate;

export default class HomeScreen extends Component {

    static navigationOptions = {
        fontSize: 50,
        title: 'MyApp Store',
      };

    constructor(props) {
        super(props);
        this.state={
            scroolEnabled: true,
            isLoading: true,
            imageField: '',

        }
    }

    componentDidMount(){
        return fetch('https://gist.githubusercontent.com/aashapure/7af28cbab39507f9a53b81de2a3e31fb/raw/169bec90b66bd7dbe706ecdee79c5df916453fb1/gistfile1.txt')
        .then((response)=>response.json()).then((responseJson)=>{
            this.setState({
                isLoading: false, 
                dataSource: responseJson.catalogue }, function(){

                });            
        }).catch((error)=>{
            Alert.alert('Not able to Connet to Server');
        });
    }

    TOPressed=(myTitle, sectionIcon)=>{
        
        myNavigate('CatagoryScreen', {
            catagoryTitle: myTitle,
            catagoryIcon: sectionIcon,
            
        })
    };

    render() {
  
        if(this.state.isLoading) {
            return(
                <SplashScreen/>
            );
        }

        const {navigate} = this.props.navigation;
        myNavigate = navigate;
        return(
            
    <View style={myStyles.mainContainer}>
        <FlatList scrollEnabled={this.state.scroolEnabled}
                  style={myStyles.flatListStyle} data={this.state.dataSource} 
                  horizontal={false}
                  renderItem={({item})=>
                    <TouchableOpacity 
                        onPress={() =>this.TOPressed(item.title,item.icon) }
                        style={myStyles.TOStyle}>
                        <View style={myStyles.cellView}>
                            <ImageBackground 
                                source={{uri: item.icon}}
                                style={myStyles.imageBackground}>
                                <Text style={myStyles.textStyle}>
                                             {item.title}    
                                </Text> 
                            </ImageBackground> 
                        </View>  
                    </TouchableOpacity>   
                             } 
                                keyExtractor={({id}, index)=> id
                            }
                        />
                </View>
        );
    }
}

const myStyles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'yellowgreen',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    TOStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',        
    },
    flatListStyle: {
        height: '100%',
        width: '100%'
    },
    textStyle: {
      
    //   top: 80,
      color: 'black',
      fontWeight: 'bold',
      fontFamily: 'Noteworthy-Bold',
      fontSize: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellView: {
        
        height: 266, 
        width: 375,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})