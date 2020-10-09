import React,{useState, useEffect} from 'react'
import { View , Button, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue} from '../StateProvider';
import {db} from './Firebase'

function Checkout() {
    
    const [basket, setBasket] = useState([])
    const [ {user},dispatch] = useStateValue();
    let calories= 0

    useEffect(() => {
      console.log({user})
      db.collection('users').doc(user).collection('message').onSnapshot(snapshot => {
      setBasket(snapshot.docs.map(doc => ({
        id: doc.id,
        basket: doc.data()
        
       
    })));
    
      })
  }, [ ]);




    return (
       <ScrollView>
           {basket?.length === 0 ? (
             <View>
                 <Text>Your Shoping Basket is empty</Text>
                 
                </View>
         ) : (
            <View>
             
                <Text> Shoping Basket</Text>
                {basket.map(item =>(
                   calories+=item.basket.calories,

                   console.log({calories}),

              
                  <CheckoutProduct
                     key={item.id}
                     id={item.id}
                     title={item.basket.title}
                     
                     calories={item.basket.calories}
                     
                    
                  />
                  
                ))}
                 <Text>ALL CALORIES: {calories}</Text>
              </View>
             )}
         

       </ScrollView>
    )
}

export default Checkout
