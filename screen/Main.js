import React,{useState} from 'react'
import { ScrollView, TextInput, } from 'react-native-gesture-handler'
import Product from './Product'
import { useStateValue} from '../StateProvider';
import { View, Text, Button, StyleSheet, FlatList,} from 'react-native';
import Login from './Login';
import Recipe from './Recipe'
import {db} from './Firebase'

function Main({navigation}) {
    const [ {user},dispatch] = useStateValue();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    
    let newStr = search.split(', ')
    let Str = newStr.join(' ')
    let str = Str.replace(/ /g,'%2C')


    const getRecipeFromApi = () => {
      console.log(str)
      console.log('wwwwwww')
      fetch(`https://rapidapi.p.rapidapi.com/recipes/findByIngredients?8fc22bc4be744e08bee4b3a7a9f453ac&ingredients=${str}&number=10&ranking=1&ignorePantry=true`, {
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
       console.log(data);
       setData(data)
       })
    
      .catch((error) => console.error(error))    
      .finally(() => setLoading(false));
  }
 
  
  

    return (
        <View> 
         <View style={styles.singUp}>
             <Login/>
            
            <Button title='Checkout'  
            onPress={() =>  navigation.navigate('Checkout')}/>
            </View>
            <View>
              <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setSearch(text)}
               value={search}/>
              <Button  onPress={getRecipeFromApi}
               title='search'/>
              
            </View>
            
         
        <ScrollView style={styles.scroll}>
            
        {  data.map(item=> 
            <Product
          key={item.id}
         id={item.id}
         title={item.title}
         image={item.image}
         calories={159} 
         /> 
        
        )}
        
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    singUp: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'white',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      paddingTop: 5
      
    },
    scroll:{
      height: 600
    }
  })

export default Main
