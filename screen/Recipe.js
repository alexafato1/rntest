
import React,{useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';


function Recipe() {
    const [test, setTest] = useState([]);

    useEffect(() => {
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
    }, [ ]);
       
    return (
        <View >
            {
               test.map(item=> 
                
                
                <Text >Step:{item.number} {item.steps}</Text>
           
            
            )}
     
    </View>
    )
}

export default Recipe
