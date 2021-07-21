import React, { Component } from 'react';
import InputField from './common/input';
import data from '../components/mock/MockData'
class InputControl extends Component {
    render() {
        return (
            <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
                <div className="main-content-storybook">
                    <div className="layout-controls-storybook" id="layout-controls-storybook">

                        <h2>{this.props.Content.input1}</h2>
                        <h5>{this.props.Content.input2}</h5>
                        <h4>{this.props.Content.input3}</h4>
                        <div className="col-md-6">
                
                            <InputField type="text" OnChange={this.handleOnChange}
                                className="small" id="edituserName" value="value"  label="" required/>
                        </div>

                        <h4>{this.props.Content.input4}</h4>
                        <div class="col-md-6">
                            <InputField type="text" onChange={this.handleOnChange} label={this.props.label} className="small"
                                id="editUser" label={this.props.Content.label} value="value" required />
                        </div>
                        <h4>{this.props.Content.input5}</h4>

                        <div className="col-md-12" >
                            <InputField type="text" onChange={this.handleOnChange} label={this.props.label} className="large" id="editName"
                                label={this.props.Content.label} value="value" required />
                        </div>

                        <h4>{this.props.Content.input6} </h4>
                        <div className="col-md-6">
                            <InputField type="text" onChange={this.handleOnChange} label={this.props.label}
                                label={this.props.Content.label}
                                id="adduserName" placeholder={this.props.Content.holder} error={this.props.error}
                                required
                                hasError={true}
                                value=""
                                errorTxt={this.props.Content.errorTxt}
                            />

                        </div>

                        <h4>{this.props.Content.input7} </h4>
                        <div className="col-md-12">
                            <InputField type="text" onChange={this.handleOnChange} label={this.props.label} label={this.props.Content.label}
                                id="adduserName" placeholder={this.props.Content.holder}
                                required
                                value=""
                                hasError={true}
                                errorTxt={this.props.Content.errorTxt} />

                        </div>

                        <h4>{this.props.Content.disabledinput}</h4>
                        <div className="form-group col-md-6">
                            <InputField type="text" label={this.props.label}
                                value=""
                                label={this.props.Content.label} className="disabled_small"
                                id="viewuserName" placeholder={this.props.Content.disabledinput} disabled={true} />
                        </div>
                        <h4>{this.props.Content.disabledinput1}</h4>
                        <div className="form-group col-md-12">
                            <InputField type="text" label={this.props.label} label={this.props.Content.label}
                                value=""
                                className="disabled_large" id="viewuserName" placeholder={this.props.Content.disabledinput}
                                disabled={true} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
InputControl.defaultProps= { Content: data }
export default InputControl;