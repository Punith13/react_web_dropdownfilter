import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { ComboDropDownContainer } from './components/common';
import { ChipContainer } from './components/common';
import { categoryList } from './constants/categoryList';
import _ from 'lodash'; 
let chipLabel = {}; 
 
class App extends Component {

  renderChip() {

    categoryList.forEach( category => {

      chipLabel[category] = undefined;

      let tempArray = [];
      this.props.chipData.chipData.map( item => {
        
        let tempItem = _.pick( item, category);
        
         if(!_.isEmpty(tempItem)){
            if(!_.isUndefined(tempItem[category])){
              if(tempItem[category].toString().search(/multiple/g) === -1){
                tempArray.push(tempItem);
              }
            }
         }

         if(tempArray.length > 1){ 
          chipLabel[category] = `${category} (multiple)`;
          } else {

              if(!_.isUndefined(item[category])){
                chipLabel[category] = item[category];
              }
              
          }
      });
    });
  
     return categoryList.map( category => {

        return <ChipContainer className="chips" 
                              key={category} 
                              value={chipLabel[category]} 
                              category={category} 
                />
      }); 

  }

  render() {
    return (
      <div className="App">
        <div className="filters">
          <p>Filters:</p>
          {this.renderChip()}
        </div>
        
        { categoryList.map( category => {
          return <ComboDropDownContainer key={category} category={category} />
        })}
      </div>
    );
  }
}

const mapStateToProps = ({chipData}) => {

    return{
      chipData
    }
}

export default connect(mapStateToProps)(App);
