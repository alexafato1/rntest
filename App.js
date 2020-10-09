import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './screen/MainStackNavigator'
import {StateProvider, useStateValue} from './StateProvider';
import reducer, { initialState} from './screen/reducer';
import firebase from 'firebase';





const Stack = createStackNavigator();

export default function App() {
  


  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <MainStackNavigator />
    </StateProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
