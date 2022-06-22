import React from 'react';

export class CustomForm extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e){
        let value = e.target.value;
        this.props.handleChange(value);
    }
  
    render(){
      return(
        <form className='input-group'>
            <input 
              type="text" 
              className="city-input"
              placeholder="Rechercher une ville"
              onChange = {this.handleChange}
            />
            
              <button 
                className="btn-input" 
                type="submit"
                onClick={this.props.handleClick}
              >
                Rechercher
              </button>
            
          </form>
      )
    }
  }