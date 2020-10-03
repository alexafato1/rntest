import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{basket}] = useStateValue();

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
                     price={item.price}
                    
                  />
                ))}
              </View>
             )}
         
           {basket.length > 0  && (
              
            <View>Subtotal:
                 <Subtotal/>
                 </View>
             
           )}

       </ScrollView>
    )
}

export default Checkout
