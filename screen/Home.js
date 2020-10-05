import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Login from './Login';
function Home({navigation}) {


   
    return (
        <SafeAreaView style={styles.container}>
            <Text >HELLO! I am HOME</Text>
           <Login/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
   
})

export default Home
