import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {View, Text} from 'react-native'


export default class Third extends Component {
   
    static navigationOptions = {
        // tabBarColor: "white",
        // tabBarIcon:  <FontAwesome>{ Icons.creditCard }</FontAwesome>,
        tabBarLabel: "Bills"
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
                    This is Tab 3
                </Text>
            </View>
        );
    }
    
}