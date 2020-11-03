import goldbears from '../images/goldbears.png'

const initState = {
    items: [
       
        {id:1, title:"Gold Bears Gummi Candy",price:1.79,img:goldbears}
    ],
    addedItems:[],
    total: 0

}
const shoppingCartReducer= (state = initState,action)=>{
    
    return state;

}
export default shoppingCartReducer;
