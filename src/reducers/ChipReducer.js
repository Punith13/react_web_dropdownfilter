import _ from 'lodash';
import { SELECT_ONE , 
         SELECT_ALL , 
         CLEAR_ALL } from '../Actions/types'; 

let chipData = []; 
export default (state = { chipData : [] } , action) => {

    switch(action.type){
        
        case SELECT_ONE: 

        if(!action.payload.item.checked){
            chipData = [ ...chipData , { [action.payload.category] : action.payload.item.label }];
        }else{
            chipData = state.chipData.filter( item => {   
                return item[action.payload.category] !== action.payload.item.label
            }); 
        }
        return { ...state , chipData };
        break; 

        case SELECT_ALL:
        chipData = [ ...chipData , { [action.payload.category] : `${action.payload.category} (multiple)` }];
        return { ...state , chipData };
   
        break;

        case CLEAR_ALL: 
        
        chipData = state.chipData.map( item => {
           return _.omit( item , action.payload.category) 
        });

        return { ...state , chipData };
        return state; 
       
        break;
        
        default: 
        return state;
    }

}