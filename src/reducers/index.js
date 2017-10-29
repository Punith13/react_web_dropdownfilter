import { combineReducers } from 'redux'; 
import listReducer  from './ComboListReducer';
import chipReduer from './ChipReducer'; 

let rootReducer = combineReducers({
    labelList: listReducer,
    chipData: chipReduer
}); 

export default rootReducer;