import React from 'react'; 

const CheckBox = (props) => {

    return (
        <div style={styles.checkBoxStyle}>
            <input type="checkbox" 
               value={props.checked}
               checked={props.checked} 
               onChange={props.onChange} 
            /><span>{props.label}</span>
        </div>
    );
}

const styles={
    checkBoxStyle:{
        marginBottom:'5px'
    }
}

export { CheckBox }
