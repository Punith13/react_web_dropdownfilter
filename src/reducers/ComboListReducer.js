
import {categoryList} from '../constants/categoryList'; 

const INITIAL_STATE = { State: [] , Age:[] } ;

let selectedCombolist;

export default (state = INITIAL_STATE , action) => {

    switch(action.type){

        case 'GET_INITIAL_DATA':
        return { ...state , [action.payload.category] : action.payload.data };

        case 'SELECT_ALL': 
          selectedCombolist = state[action.payload.category].map( item => {
            return { ...item , checked: true }
          });

        return { ...state , [action.payload.category] : selectedCombolist , selectAll : false  };

        case 'SELECT_ONE': 
         selectedCombolist = state[action.payload.category].map( item => {
            if(item === action.payload.item ){
                return { ...item , checked: !item.checked }
            }
            return item; 
          });

          return { ...state , [action.payload.category] : selectedCombolist };

        case 'CLEAR_ALL': 
          selectedCombolist = state[action.payload.category].map( item => {
            return { ...item , checked: false }
          });

        return { ...state , [action.payload.category] : selectedCombolist ,  selectAll : true  }; 


        default: 
        return state; 
    }

}