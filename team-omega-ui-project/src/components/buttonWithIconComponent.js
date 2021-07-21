import React, { Component } from 'react';
import '../styles/App.css';
import ButtonControl from './common/buttonControl';
import MockData from '../mock/MockData';


class ButtonWithIconComponent extends Component {
  state = {
    content: '',
  }
  render() {
    return (
      <div className="col-sm-8 col-md-10 col-lg-10 main-content2">

        <div className="main-content-storybook">
          <div className="layout-controls-storybook" id="layout-controls-storybook">
            <h2> Buttons With Icon</h2>
          </div>
          <h4>Primary Button With Icon</h4>

          <ButtonControl className="btn btn-primary default-button "
            id="data" name={this.props.Content.PrimaryButtonWithIcon}
            type="submit" buttonWithIcon={true} icon="send icon" />

          <br />
          <br />
          <h4>Primary Button With Icon Floating Right</h4>
          <h5>Property - float:right</h5>
          <br />

          <ButtonControl className="btn btn-primary email-send" id="Icon"
            name={this.props.Content.SecondButtonWithIcon} type="submit"
            buttonWithIcon={true} buttonWithIcon={true} icon="email send icon" />

          <br />
          <h4>Circular Button With Icon </h4>
          <div className="search-text">

            <ButtonControl className="btn circular" id="circular"
              name={this.props.Content.CircularButtonWithIcon} type="button"
              buttonWithIcon={true} icon="close icon" />

          </div>
        </div>
      </div>

    )
  }
}
ButtonWithIconComponent.defaultProps = {Content:MockData};
export default ButtonWithIconComponent;
