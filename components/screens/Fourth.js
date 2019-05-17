import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {View, Text} from 'react-native'


export default class Fourth extends Component {
   
    static navigationOptions = {
        // tabBarColor: "white",
        // tabBarIcon:  <FontAwesome>{ Icons.creditCard }</FontAwesome>,
        tabBarLabel: "Helicopter"
    };
    
    render() {
        return (
            <View style={
                {
                     flex : 1,
                     justifyContent : "center",
                     alignItems : "center" 
                }
            }>
                <Text style ={ { fontSize:30} }>
                    This is Helicopter Tab
                </Text>
            </View>
        );
    }
    
}