export const initialState = {
    basket: [],
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
        case 'ADD':
            return { 
                ...state,
                basket: [...state.basket, action.item],
                calories: state.calories + action.calories.calories
            }
           
        case 'DELETE':
          let newBasket = [...state.basket];
          console.log(action)
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
              if (index>= 0) {
                  newBasket.splice(index, 1)
                  
              } else {
                  console.warn(
                      `Cant remove ${action.id}`
                  );
              }
          
            return { ...state,
                basket: newBasket,
                calories: state.calories - action.calories
            }
           
        default: 
          return state;
    } 
}

export default reducer;