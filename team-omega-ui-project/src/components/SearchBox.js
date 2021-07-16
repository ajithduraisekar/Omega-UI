import React, { Component } from 'react';
import Search from './common/search';
// import data from '../../src/components/mock/MockData'
class SearchBox extends Component {
    render() {
        return (

            <div className="main-content-storybook">
                <div className="layout-controls-storybook" id="layout-controls-storybook">
                    <h2>{this.props.Content.text} </h2>
                    <h4> {this.props.Content.sub}</h4>
                    <div className="form-group has-search col-md-4">
                        <Search type="search" label={this.props.label} span={this.props.span}
                            className="small" id="email" onChange={this.handleOnSubmit}
                            placeholder={this.props.Content.placeholder}   users= {this.props.Content.users} />
                    </div>
                    <h4>{this.props.Content.sub1}</h4>
                    <div className="form-group has-search">
                        <Search type="search" label={this.props.label} span={this.props.span}
                            className="large" id="email" onChange={this.handleOnSubmit}
                            placeholder={this.props.Content.placeholder} users= {this.props.Content.users} />
                    </div>

                </div>
            </div>
        )
    }
}
// SearchBox.defaultProps = {Content: data}
export default SearchBox;