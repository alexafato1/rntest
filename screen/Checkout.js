import React from 'react'
import { View , Button, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CheckoutProduct from './CheckoutProduct';

import { useStateValue} from '../StateProvider';

function Checkout() {
    const [{basket, calories}] = useStateValue();

    return (
       <ScrollView>
           {basket?.length === 0 ? (
             <View>
                 <Text>Your Shoping Basket is empty</Text>
                 
                </View>
         ) : (
            <View>
             
                <Text> Shoping Basket</Text>
                {basket?.map(item =>(
                    
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     calories={item.calories}
                     
                    
                  />
                ))}
                 <Text>ALL CALORIES: {calories}</Text>
              </View>
             )}
         

       </ScrollView>
    )
}

export default Checkout
