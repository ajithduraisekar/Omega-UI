import React, { Component } from 'react';
// import data from './mock/MockData';
import TextField from './common/textField';
import InputField from './common/input'
class TextArea extends Component {

    render() {
        return (
            <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
                <div className="main-content-storybook">
                    <div className="layout-controls-storybook" id="layout-controls-storybook">

                        <h2>{this.props.Content.textArea}</h2>
                        <h4>{this.props.Content.text1}</h4>

                        <div className="form-group email-body ">
                            <TextField className="form-control" onChange={this.handleChange} label={this.props.label} label={this.props.Content.label}
                                rows="12" id="email-id" name="text" placeholder={this.props.Content.text3}
                                title="email-body"></TextField>
                        </div>

                        <h4>{this.props.Content.text2}</h4>
                        <div className="form-group email-body ">
                            <TextField className="form-control" onChange={this.handleChange} rows="12" id="email-id"
                                name="text" placeholder={this.props.Content.text3}
                                label=""
                                title="email-body"></TextField>
                        </div>

                        <h4>{this.props.Content.heading}</h4>
                        <form action className="announcement-form">
                            <div className="text-title form-group">
                                <InputField type="text" className="large"
                                    label={this.props.label}
                                    placeholder={this.props.Content.text4}
                                    title="subject-for-announcement"
                                    id="subject-subject" />

                            </div>
                            <div className="announcement-area">
                                <TextField onChange={this.handleChange} className="form-control" rows="8"
                                    name="text" placeholder={this.props.Content.text5}
                                    title="main-announcement" label=""
                                    id="Announcement-id"></TextField>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
// TextArea.defaultProps = { Content: data }
export default TextArea;
