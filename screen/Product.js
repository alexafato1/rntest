import React,{useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Recipe from './Recipe'
import { useStateValue} from '../StateProvider';
import {db} from './Firebase'

function Product({ id, title, image, calories}, {navigation}) {

    const [ {user}, dispatch] = useStateValue();
    const [test, setTest] = useState([]);
    const add = () => {
        console.log({user})
       
        db.collection('users').doc(user).collection('message')
        .add({
            title: title,
            calories: calories
        })
      
    };
    
    const getRecipe = () => { 
        fetch(`https://rapidapi.p.rapidapi.com/recipes/${id}/analyzedInstructions?stepBreakdown=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "2e1b9f0c3cmsh2ae41aad4ee0752p10383cjsn9630cf6f338d"
        }
    })
        .then((response) => {
          return response.json();
          })
          .then((data) => {
           console.log(data[0]['steps'])
           setTest(data[0]['steps'])
          }) 
       }
   

    return (
        
  
           
            <View style={styles.container}>
            <Text style={{fontSize:18}}>{title}</Text>
            
           <Image source={{uri: image}} style={{width: '90%', height: '60%'}} />
           <Button title = 'Add'  onPress={add}/>
           <View style={styles.button}>
        
           <Button title='Recipe'  
            onPress={() =>  navigation.navigate("Recipe" , {id:id})}/>
           </View></View>
           
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 500,
        height: 500,
        justifyContent: 'center'
    },
   button: {
       flexDirection: 'row',
       justifyContent: 'center'
   }
   
})

export default Product
