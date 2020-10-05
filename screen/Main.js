import React from 'react'
import { ScrollView, } from 'react-native-gesture-handler'
import Product from './Product'
import { useStateValue} from '../StateProvider';
import { View, Text, Button, StyleSheet} from 'react-native';
import Login from './Login';

function Main({navigation}) {
    const [{calories}, dispatch] = useStateValue();



    return (
        <View> 
         <View style={styles.singUp}>
             <Login/>
            
            <Button title='Checkout'  
            onPress={() =>  navigation.navigate('Checkout')}/>
            </View>
        <ScrollView>
         
            <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://grandkulinar.ru/uploads/posts/2020-07/1594121700_lenivaya-ovsyanka-v-banke.jpg'
         calories={159}/> 
         
         <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://grandkulinar.ru/uploads/posts/2020-07/1594121700_lenivaya-ovsyanka-v-banke.jpg'
         calories={59}/>

         <Product
        id='5456789909'
         title='1000 places to see before you die' 
         image='https://grandkulinar.ru/uploads/posts/2020-07/1594121700_lenivaya-ovsyanka-v-banke.jpg'
         calories={459}/>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    singUp: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'white',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      paddingTop: 5
      
    },
  })

export default Main
