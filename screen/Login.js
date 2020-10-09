import React,{useState} from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useStateValue} from '../StateProvider';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import 'firebase/auth';

import {  auth, db} from './Firebase';
import { TextInput } from 'react-native-gesture-handler';

function Login({navigation}) {
  
  const [email, setEmail] = useState('Ad@mail.ru')
  const [password, setPassword] = useState('Telema777')
  const [{basket, calories, user}, dispatch] = useStateValue();

  
  const handleRegister=() =>{
     auth
     .createUserWithEmailAndPassword(email, password)
    
       
   .catch((error) => {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
        
     });
     var u = auth.currentUser
     if(u!=null){
       uid= u.uid 
       console.log(uid)
       dispatch({
        type: 'SET_USER',
        user: uid
       })

       doc= uid
      db.collection('users').doc(uid)
      .set({
          
          timestamp: Date.now(),
          email: email
      })
     }

  }

   

  const handleLogin=() =>{
    auth.signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      Alert.alert('Error')
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    var u = auth.currentUser
     if(u!=null){
       uid= u.uid 
       console.log(uid)
       dispatch({
        type: 'SET_USER',
        user: uid
       })
     }
  } 
  
  const handleLogout=() =>{
    auth.signOut().then(function() {
      dispatch({
        type: 'SET_USER',
        user: null
     })
    
    }).catch(function(error) {
      // Handle Errors here.
      Alert.alert('Error')
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
   
   
  } 

    return (
        <View  >
            {    
                 !user ?
                 <View style={styles.container}>
                    
                  <TextInput
                  style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={setEmail}
                  value={email}
                    />
                    <TextInput
                  style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={setPassword}
                  value={password}
                    />
                 <Button onPress={() => handleRegister()} title="Register" /> 
                 <Button onPress={() => handleLogin()} title="Login" /> 
                 
                 </View>
                 :
                 <View>
                 <View style={styles.singUp}>
                   <View>
                   <Text>`Hello`</Text>
                   <Button onPress={() => handleLogout()} title="SignOut" />
                   </View>
                   <View>
                  
                   </View>
                   
                   </View>
                
                
                 </View>
                 }
           </View>
        )
}

 const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  singUp: {
    flexDirection: "row",
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    paddingTop: 20
    
  },
})

export default Login
