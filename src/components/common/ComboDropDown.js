import React,{Component} from 'react'; 
import {Button} from './Button';
import {ComboListContainer} from './ComboList'; 
import { connect } from 'react-redux';
import * as actions from '../../Actions'; 
import { CLEAR_ALL , SELECT_ALL } from '../../Actions/types';

class ComboDropDown extends Component {

    constructor(props){
        super(props); 

        this.state ={
            selectAll: true,
            showDropDown : true
        }
    }

    componentWillMount(){
        this.props.getData(this.props.category); 
    }

    renderButton(){
        if(!this.state.selectAll){
            return  <Button label="Clear" onClick={ () => this.toggleAllClick(CLEAR_ALL , true)} />
        }

        return  <Button label="Select All" onClick={ () => this.toggleAllClick(SELECT_ALL , false)} />
        
    }

    toggleAllClick(type, flag){

        this.props.toggleAllClick(type, this.props.category); 
        this.setState( { selectAll: flag} );

    }

    headerButtonClick() {
        this.setState( { showDropDown: !this.state.showDropDown});
    }

    render() {
        return (
            
                <div>

                    <Button label={this.props.category} icon="ion-android-arrow-dropdown" onClick={ () => this.headerButtonClick()}/>
                    <br />
                    {  this.state.showDropDown && 
                    <div>
                        {this.renderButton()}
                        
                        <ComboListContainer Combolist={this.props.data[this.props.category]}
                                    category={this.props.category} 
                        />
                    </div> }
                </div>
        )
    }

}

const mapStateToProps = (state) => {

    return{
        data : state.labelList
    }
    
}

const ComboDropDownContainer = connect(mapStateToProps , actions)(ComboDropDown);

export { ComboDropDownContainer }; 