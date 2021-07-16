import React, { Component } from 'react';
import Data from '../../mock/mockdata';
import '../../styles/App.css';

class CommonDropdown extends Component {
    state = {
        value: 'select',
        newValue: '',
    }

    handleOnClick =  (e) => {
        this.setState({value: e.target.value});
        console.log( e.target.value);
    }
  
      //called function
      renderDropdown(className){
          switch(className){
              case "small":
                  return "selectpicker  form-control";
              case "large":
                  return "form-group filter-search"; 
              default:
                  return "selectpicker  form-control" 
          }
      }
    render() {
         const dropdownList = this.props.dropdownList
         let _className =  this.renderDropdown(this.props.className) 
        return (
            
            <div className="CommonDropdown_div">
                
                <label for="status" className="form-label">{this.props.label ? this.props.label : ""}</label>
                <select id={this.props.id}  className={this.props.hasError ?"custom-select is-invalid":_className} 
                onClick={this.handleOnClick} required>
                    {/* isOptionDisabled={(option) => option.isdisabled} */}
                    {
                        dropdownList.map(x => {
                            return <option>{x.name}</option>
                        })
                       
                    }
                </select>
                {this.props.hasError && <div className="invalid-feedback">
                        {this.props.errorMsg}
                    </div>}
            </div>
        );
    }
}
CommonDropdown.defaultProps = Data;
export default CommonDropdown;
