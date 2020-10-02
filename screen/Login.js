import React,{useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {auth, firebase} from './firebase';
import * as Google from 'expo-google-app-auth';

function Login() {
    const [User, setUser] = useState(false)
    const [Name, setName] = useState('')

      async function signInWithGoogleAsync () {
          try{

              const result = await Google.logInAsync({
                iosClientId: "101569567616-emlhe2oerdkvbbs2pdmqs93qda3rjjso.apps.googleusercontent.com",
                androidClientId: '101569567616-3ku3a2du4istcoeghhj5qvltcoqv6eqk.apps.googleusercontent.com',
                scopes: ['profile', 'email'],   
              })
              if (result.type === 'success') {
                  setUser(true)
                  console.log(result)
                  console.log(result.user.name)
                  console.log(User)
                  setName(result.user.name)
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
        <View  style={styles.container}>
            {    
                 !User ?
                
                 <Button onPress={() =>signInWithGoogle() } title="Sign in with Google" /> 
                 :
                 <View >
                   <Text>`Hello, {Name}`</Text>
                 <Button onPress={() => logOut()} title="Sign OUT" />
                 </View>
                 
            }
           
           
        </View>
        )
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Login
