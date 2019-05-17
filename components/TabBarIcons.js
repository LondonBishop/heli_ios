import React, { Component } from 'react'
// import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome, { IconTypes, Icons } from 'react-native-fontawesome';

export default class TabBarIcon extends Component {
    render() {
      return (
          
              <FontAwesome type={IconTypes.FAR}>
                      {Icons.pills}
                </FontAwesome>
          
        )
    }
}

// const tabBarIcon = name => ({ tintColor }) => (
//   <MaterialIcons
//     style={{ backgroundColor: 'transparent' }}
//     name={name}
//     color={tintColor}
//     size={24}
//   />
// );

// export default tabBarIcon;
