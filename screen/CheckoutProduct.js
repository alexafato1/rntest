import React,{ useState} from 'react'
import { Button, Text, View } from 'react-native';
import { useStateValue} from '../StateProvider';

function CheckoutProduct({id, title, image,calories }) {
    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket =()=>{
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
