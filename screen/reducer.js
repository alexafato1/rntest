export const initialState = {
    
    user: null,
    calories: 0
}

const reducer = (state, action) =>{
    console.log(action)
   
    switch (action.type) {
        case 'SET_USER':
           return {
               ...state,
               user: action.user
           }
           case 'OUT_USER':
           return {
               ...state,
               user: null
           }
        case 'ADD':
            return { 
                ...state,
                
                calories: state.calories + action.calories.calories
            }
           
        case 'DELETE':
          
          console.log(action)
        
          
            return { ...state,
               
                calories: state.calories - action.calories
            }
           
        default: 
          return state;
    } 
}

export default reducer;