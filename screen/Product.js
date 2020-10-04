import React,{useState} from 'react'
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { useStateValue} from '../StateProvider';

function Product({id, title, image, calories}) {

    const [{basket}, dispatch] = useStateValue();

    const add = () => {
        //add to basket
        dispatch({
            type: 'ADD',
            item: {
                id: id,
                title: title,
                image: image,
                calories: calories
                
            },
            calories: {
                calories: calories
            }
        })
    };


    return (
        
        <ScrollView style={styles.container}>
           
            <View>
            <Text style={{padding: '3%'}}>{title}</Text>
            <Text style={{padding: '3%'}}>{calories}</Text>
           <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
           <Button style={{padding: '3%'}} title = 'Add'  onPress={add}/>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width: 500,
        height:400
        
    },
    text: {
        fontSize: 35
    }
   
})

export default Product
