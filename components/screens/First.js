import React, { Component } from 'react';
import {View, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import { Image, ListItem, Divider } from 'react-native-elements';


export default class First extends Component {
  
    
    
    static navigationOptions = {
        tabBarLabel: "Accounts",
        tabBarColor: "white",
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require('../images/accounts.png')}
                style={ {width:32, height:32, tintColor: 'white' } }
            >
            </Image>)
        // tabBarIcon : ({ tintColor }) => ( <Icon 
        //             name='rowing' 
        //             style ={ {tintColor:'black' } }
        //         /> )
        // tabBarIcon: ({ tintColor }) => <FontAwesome>{ Icons.chevronLeft }</FontAwesome>
    };
    
    render() {

        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
              },
              {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
              },
          ]



        return (
            <View >
                <View>
                        {
                            list.map((l, i) => (
                                <View>
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: l.avatar_url } }}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                    />
                                    {/* <Divider style={{ backgroundColor: 'blue' }} />; */}
                                </View>
                            ))
                        }
                </View>
            </View>
        );
    }
}






