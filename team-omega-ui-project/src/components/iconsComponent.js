import React, { Component } from 'react';
import '../styles/App.css';
import IconsControl from './common/iconsControl';

class IconsComponent extends Component {
  state = {
    content: '',
  }
  handleClick() {
    this.setState({ content: "James" });
  }

  render() {
    return (
      <div className="IconsComponent">
        <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
          {/* Here starts the main content */}
          <div className="main-content-storybook">
            <div className="layout-controls-storybook" id="layout-controls-storybook">
              <h2>Icons</h2>
              <h4>Default User Plus Icon</h4>
              <a href="#addUsersModalPopup" data-toggle="modal" aria-label="addUserIcon">
                <IconsControl icon="Add Users" />
              </a><br /><br />
              <h4>User Plus Icon With Property - float:Right</h4>
              <div className="team-contacts-heading">
                <a href="#addUsersModalPopup" data-toggle="modal" aria-label="addUserIcon">
                  <IconsControl icon="User Plus Icon With Property" />
                </a><br /><br />
              </div>
              <div className="all-users-grid">
                <h4>Eye Icon</h4>
                <a href="#viewUsersModalPopup" data-toggle="modal" aria-label="viewUserIcon">
                  <IconsControl icon="Eye Icon" />
                </a> <br /><br />
                <h4>Edit Icon</h4>
                <a href="#editUsersModalPopup" data-toggle="modal" aria-label="editUserIcon">
                  <IconsControl icon="Edit Icon" />
                </a>
                <br /><br />
              </div>
              <h4>Search Icon</h4>
              <IconsControl icon="Search Icon" />
              <h4>Trash Icon</h4>
              <div className="all-announcement-grid">
                <a href className="view-user
            s-icon" title="delete User">
                  <IconsControl icon="Trash Icon" />
                </a>
                <br /><br />
              </div>
              <h4>Envelope Icon</h4>
              <IconsControl icon="envelop" />
              <br /><br />
              <h4>Bull Horn Icon</h4>
              <IconsControl icon="Bull Horn Icon" />
              <br /><br />
              <h4>Clip Board Icon</h4>
              <IconsControl icon="Clip Board Icon" />
              <br /><br />
              <h4>DefaultAngle Left Icon</h4>
              <IconsControl icon="DefaultAngle Left Icon" />
              <h4>Default Angle Right Icon</h4>
              <IconsControl icon="Default Angle Right Icon" />
              <h4>Angle Left Icon With Property - font-size: 4rem;
                color:blue;</h4>
              <div className="left-right-icon">
                <IconsControl icon="Angle Left Icon With Property" />
              </div>
              <h4>Angle Right Icon With Property - font-size: 4rem;
                color:blue;</h4>
              <div className="left-right-icon">
                <IconsControl icon="Angle Right Icon With Property" />
              </div>
              <h4>Angle Double Right and Left Icons</h4>
              <div className=" pagination-container">
                <a href="#" aria-label="NextIcon">
                  <IconsControl icon="Angle Double Right Icon" />
                </a>
              </div>
              <div className=" pagination-container">
                <a href="#" aria-label="PreviousIcon">
                  <IconsControl icon="Angle Double Left Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default IconsComponent