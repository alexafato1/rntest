import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer'
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';

function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <View>
               <CurrencyFormat
            renderText={(value) => (
                <Text>
            Subtotal ({basket.length} item):{value}
                    
                     <TextInput type='checkbox'/>
                    
               </Text>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
         <Button title='Checkout'/>
        </View>
    )
}

export default Subtotal
