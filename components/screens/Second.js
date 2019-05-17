import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {View, Text} from 'react-native'


export default class Second extends Component {
   
    static navigationOptions = {
        // tabBarColor: "white",
        // tabBarIcon:  <FontAwesome>{ Icons.creditCard }</FontAwesome>,
        tabBarLabel: "Credit Cards"
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
                    This is second Tab
                </Text>
            </View>
        );
    }
    
}