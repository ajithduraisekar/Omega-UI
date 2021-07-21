import React, { Component } from 'react';
import '../styles/App.css';
import CommonHeadings from './common/commonHeadings';

class HeadingsComponent extends Component {

  render() {
    return (
      <div className="HeadingsComponent">
      <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
        {/* <!-- Here starts the main content --> */}
        <div className="main-content-storybook">

          <div className="layout-controls-storybook" id="layout-controls-storybook">

            <CommonHeadings type='h2' value="Headings" />

          </div>
          <div className="headings-tags">

            <CommonHeadings type='h1' value="This is h1 tag" />

            <CommonHeadings type='h2' value="This is h2 tag" />

            <CommonHeadings type='h3' value="This is h3 tag" />

            <CommonHeadings type='h4' value="This is h4 tag" />

          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default HeadingsComponent;