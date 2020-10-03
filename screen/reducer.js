export const initialState = {
    basket: [],
    user: null,
    calories: 0
}

const reducer = (state, action) =>{
    console.log(action)
    console.log(action.calories.calories)
    switch (action.type) {
        case 'ADD':
            return { 
                ...state,
                basket: [...state.basket, action.item],
                calories: state.calories + action.calories.calories
            }
           
        case 'DELETE':
            return { state}
           
        default: 
          return state;
    } 
}

export default reducer;