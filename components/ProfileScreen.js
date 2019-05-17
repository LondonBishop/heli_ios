import React, { Component } from 'react';

export default class ProfileScreen extends Component {
   
    static navigationOptions = {
        title: 'Profile',
    };
    
    render() {
        const {name} = this.props.navigation;
        return (
        <Button
            title={"Back to Main " + name}
            onPress={() => navigate('Home')}
        />
        );
    }
    
}