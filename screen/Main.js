import React from 'react'
import { ScrollView, } from 'react-native-gesture-handler'
import Product from './Product'
import { useStateValue} from '../StateProvider';
import { View, Text, Button } from 'react-native';

function Main({navigation}) {
    const [{calories}, dispatch] = useStateValue();
    return (
        <View> 
            <Text>YOUR CALORIES: {calories}</Text>
            <Button title='Checkout'  
            onPress={() =>  navigation.navigate('Checkout')}/>
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

export default Main
