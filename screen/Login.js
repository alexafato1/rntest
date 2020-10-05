import React,{useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {auth, firebase} from './firebase';
import { useStateValue} from '../StateProvider';


import * as Google from 'expo-google-app-auth';


function Login({navigation}) {
    
    const [Name, setName] = useState('')
     const [{basket, calories, user}, dispatch] = useStateValue();

      async function signInWithGoogleAsync () {
          try{

              const result = await Google.logInAsync({
                iosClientId: "101569567616-emlhe2oerdkvbbs2pdmqs93qda3rjjso.apps.googleusercontent.com",
                androidClientId: '101569567616-3ku3a2du4istcoeghhj5qvltcoqv6eqk.apps.googleusercontent.com',
                scopes: ['profile', 'email'],   
              })
              if (result.type === 'success') {
                 
                  
                  setName(result.user.name)

                  dispatch({
                    type: 'SET_USER',
                    user: result.accessToken
                 })
             
                  return result.accessToken;

              } else {
                return { cancelled: true };
              }

          } catch(e) {
            return { error: true };
          }
      }
     

      async function signOutWithGoogleAsync () {
        try{
          const config = {
            iosClientId: "101569567616-emlhe2oerdkvbbs2pdmqs93qda3rjjso.apps.googleusercontent.com",
            androidClientId: '101569567616-3ku3a2du4istcoeghhj5qvltcoqv6eqk.apps.googleusercontent.com',
            scopes: ['profile', 'email'] 
          };

          const { type, accessToken } = await Google.logInAsync(config);

          if (type === 'success') {
            /* Log-Out */
            await Google.logOutAsync({ accessToken, ...config });
            setUser(false)
            setName('')
            console.log(User)
            
            /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
          }

        } catch(e) {
          return { error: true };
        }
    }



      

    const signInWithGoogle = () => {
        signInWithGoogleAsync()
        }

   


    const logOut= () => {
      signOutWithGoogleAsync()
      }

    return (
        <View  >
            {    
                 !user ?
                 <View style={styles.container}>
                 <Button onPress={() =>signInWithGoogle() } title="Sign in with Google" /> 
                 </View>
                 :
                 <View>
                 <View style={styles.singUp}>
                   <View>
                   <Text>`Hello, {Name}`</Text>
                   <Button onPress={() => logOut()} title="SignOut" />
                   </View>
                   <View>
                   <Text>ALL CALORIES: {calories}</Text>
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
