import React, { Component } from 'react';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
            
        });
       // console.log('text');
    };
    render() {

        return (
            <div>
                <label for="subject-subject" className="sub-1">{this.props.label ? this.props.label : ""}</label>
                <textarea
                    type="text"
                    onChange={this.handleChange}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    required
                    className={this.props.className}
                    value={this.state.value}
                    rows={this.props.rows} />
            </div>

        );
    }
}
export default TextField