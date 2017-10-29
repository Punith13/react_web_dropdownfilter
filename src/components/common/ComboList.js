import React,{ Component } from 'react'; 
import {CheckBox} from './Checkbox'; 
import { connect } from 'react-redux'; 
import { selectOne } from '../../Actions'; 

class ComboList extends Component {

    onChange(e, item, category ){

        this.props.selectOne('SELECT_ONE' , item , category);
    }

    render(){
        return (
            <div>
                { 
                    this.props.Combolist.map( item => {
                    return  <CheckBox key={item.label} 
                                      onChange={ (e) => this.onChange(e, item , this.props.category) }
                           {...item} />
                    })
                }
            </div>
        )
    }

}

const ComboListContainer = connect( null , {selectOne} )(ComboList); 

export { ComboListContainer }