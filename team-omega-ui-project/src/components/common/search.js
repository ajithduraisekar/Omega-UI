import React, { Component } from 'react';
// import data from '../mock/MockData'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            users: [],
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnSubmit() {
        this.setState({
            searchString: this.refs.search.value, // Refs are a function provided by React to access the DOM element
            //  and the React element that you might have created on your own. 
        });
    }
    renderSearch(className) {
        switch (className) {
            case "small":
                return "form-control";
            case "large":
                return "form-control";
        }
    }
    render() {
        let _className = this.renderSearch(this.props.className)

        return (
            <div>
                <span className="fa fa-search form-control-feedback">{this.props.span ? this.props.span : ""}</span>
                <input
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleOnSubmit}
                    className={_className}
                    type="search"
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    required />
            </div>
        );
    }
}
// Search.defaultProps = { Content: data }
export default Search