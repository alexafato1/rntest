import React,{ useState} from 'react'
import { Button, Text, View } from 'react-native';
import { useStateValue} from '../StateProvider';
import {db} from './Firebase'

function CheckoutProduct({id, title, image,calories }) {
    const [{user}, dispatch] = useStateValue();
 
    const RemoveFromBasket =()=>{
      db.collection('users').doc(user).collection('message').doc(id).delete()
               
        dispatch({
            type:'DELETE',
            id: id,
            
            calories: calories
        
            
        })
    }
    return (
       <View>
           <Text>{title}</Text>
           <Text>{calories}</Text>
           <Button title='Remove' onPress={RemoveFromBasket}/>
       </View>
    )
}

export default CheckoutProduct
