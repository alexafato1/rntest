import React,{ useState} from 'react'
import { View } from 'react-native';
import { Button, Text, View } from 'react-native';

function CheckoutProduct({id, title, image,price, }) {
    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket =()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
       <View>
           <Text>{title}</Text>
           <Text>{price}</Text>
           <Button title='Remove' onPress={RemoveFromBasket}/>
       </View>
    )
}

export default CheckoutProduct
