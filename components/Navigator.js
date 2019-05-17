import React from 'react';
import { createBottomTabNavigator  } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import First from './screens/First';
import Second from './screens/Second';
import Third from './screens/Third';
import Fourth from './screens/Fourth';


// export default createBottomTabNavigator (
//     {
//        First : {screen : First},
//        Second : {screen: Second},
//        Third : {screen: Third},
//        Fourth : { screen: Fourth }
//     },
//     {
//         initialRouteName : "First"
//     },
//     {
//         tabBarOptions : {
//             activeTintColor : 'white',
//             inactiveTintColor: 'grey',
//             activeBackgroundColor : "blue",
//         }
//     }

// )

export default createMaterialBottomTabNavigator({
    First : {screen : First},
       Second : {screen: Second},
       Third : {screen: Third},
       Fourth : { screen: Fourth }
  }, {
    initialRouteName: 'First',
    activeColor: 'white',
    inactiveColor: '#e8eef7',
    barStyle: { backgroundColor: '#052a60', paddingTop : 25, paddingBottom : 10 },
    shifting: false,
  });