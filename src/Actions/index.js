import { category1List } from '../constants/category1';
import { category2List } from '../constants/category2';
import { GET_INITIAL_DATA } from './types'; 

export const getData = (category) => {

    let categoryList = [];

    switch(category){
        case 'State':
        categoryList = category1List; 
        break; 

        case 'Age':
        categoryList = category2List;
        break;

        default:
        categoryList = category1List; 

    }

    return{
        type: GET_INITIAL_DATA, 
        payload: { category , data: categoryList }
    }

}

export const toggleAllClick = (type, category) => {

    return{
        type , 
        payload: { category }
    }
}

export const selectOne = (type, item , category) => {
        
    return{
        type , 
        payload: { item , category }
    }
}