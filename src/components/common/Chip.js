import React, {Component } from 'react'; 
import { connect } from 'react-redux'; 
import * as actions from '../../Actions';
import { Button } from '../common';
import { CLEAR_ALL } from '../../Actions/types';

class Chip extends Component{

    buttonClick = () => {

        this.props.toggleAllClick(CLEAR_ALL, this.props.category); 
            
    }

    render(){
        return(

            <div >
                { this.props.value && 
                <Button style={styles.chipStyle} 
                         label= {this.props.value} 
                         icon="ion-ios-close-empty" onClick={ () => this.buttonClick()} />
                }
            </div>  
          );
    }
};

const styles={
    chipStyle:{
        height:'30px', 
        backgroundColor:'#ccc', 
        borderRadius:'5px',
        width: 'auto'
    }
}

const ChipContainer = connect( null , actions)(Chip); 

export { ChipContainer };