import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Main from './Main';
import Message from './Message';
import Gallery from './Gallery';
import Login from './Login';
import Checkout from './Checkout';
import {StateProvider, useStateValue} from '../StateProvider';

const Stack = createStackNavigator();

function MainStackNavigator() {
  
     const [{user}, dispatch] = useStateValue();
    return (
        
        <NavigationContainer>
     
         <Stack.Navigator>
         {user  ? (
     
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Main',
         
          
        }}
      />
    ) : (
   
      <Stack.Screen name="Home" component={Home}/>
    )}
           
         
           <Stack.Screen name="Gallery" component={Gallery} />
           <Stack.Screen name="Message" component={Message} />
           <Stack.Screen name="Checkout" component={Checkout} />
           <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
      
     </NavigationContainer>
    )
}

export default MainStackNavigator
