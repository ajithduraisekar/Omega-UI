import React, { Component } from 'react';
import Data from '../../mock/mockdata';
import '../../styles/App.css';

class CommonMultiSelect extends Component {
    state = {
        // value: 'select'
         value: []
    }
    handleOnClick =  (e) => {
        this.setState({value: e.target.value});
    }
     //called function
     renderDropdown(className){
        switch(className){
            case "small":
                return "col-md-4 scroll-menu";
            case "large":
                return "col-md-12 scroll-menu";
        }
    }

    render() {
        const dropdownList = this.props.dropdownList
        let _className = this.renderDropdown(this.props.className)
        return (
            
            <div className="CommonMultiSelect_div">
                <label for="status" className="form-label">{this.props.label ? this.props.label : ""}</label> 
                <select id={this.props.id}  multiple title="select-email" aria-label="select" 
                 className={_className} onClick={this.handleOnClick}>
                    {
                        dropdownList.map(x => {
                            return <option>{x.name}</option>
                        })
                       
                    }
                </select>
            </div>
        );
    }
}
CommonMultiSelect.defaultProps = Data;
export default CommonMultiSelect;
