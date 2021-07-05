import React, { Component } from 'react';

import '../styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from './dashboard'
import teamContact from './teamContact'
import teamManagements from './teamManagements'
import Storybook from './storybook';
import Layoutheader from './common/layout-header';
import Layoutfooter from './common/layout-footer';

import content from './Mock';
class App extends Component {
  render() {
    return (
      <Router>
      <Layoutheader/>
      <Switch>
      <Route path="/dashboard"  component={Dashboard} />
      <Route path="/teamManagements"  component={teamManagements} />
      <Route path="/teamContact"  component={teamContact} />
      <Route path="/storybook"  component={Storybook} />
      
       {/* <Route path="/storybook.html" exact component={storybook} />    
      <Route path="/default-button.html" exact component={defaultbutton} />
      <Route path="/button-with-icon.html" component={buttonswithicon} />

      <Route path={this.props.Content.buttonlink} component={DefaultDropdown} />
      <Route path={this.props.Content.buttonlink1} component={DropDownWithError} />
      <Route path={this.props.Content.ddlink2} component={Multi-SelectDropdown} />
      <Route path={this.props.Content.ddlink1} component={DropDownWithError} />
      <Route path={this.props.Content.ddlink} component={DefaultDropdown} />
      
      <Route path={this.props.Content.clink} component={CardsComponents} />
      <Route path={this.props.Content.inputlink} component={Textarea} />
      <Route path={this.props.Content.inputlink1} component={Input-field} />
      <Route path={this.props.Content.inputlink2} component={SearchBox} />
      <Route path={this.props.Content.laylink} component={Header} />
      <Route path={this.props.Content.laylink2}component={Footer} />
      
      <Route path={this.props.Content.laylink2} component={LeftNavigation} />
      <Route path={this.props.Content.tablelink} component={TableComponent} />
      <Route path={this.props.Content.gridlink} component={GridControlComponent} />
      <Route path={this.props.Content.gridlink1} component={GridWithScroll} />
      <Route path={this.props.Content.gridlink2} component={GridWithPagination} />
      <Route path={this.props.Content.gridlink3} component={GridWithAction} />
      <Route path={this.props.Content.gridlink4}component={GridWithColorcode} />
      <Route path={this.props.Content.pagelink} component={PaginationComponent} />
      <Route path={this.props.Content.carolink} component={CarouselsComponent} />
      <Route path={this.props.Content.modallink}component={ModalPopUpComponent} />
      <Route path={this.props.Content.Uheading} component={Headings} />
      <Route path={this.props.Content.Ulabels} component={Labels} />
      <Route path={this.props.Content.Uicons} component={Icons} /> */}

     
    </Switch>
   <Layoutfooter/>
    
</Router>
    );
  }
}
App.defaultProps = { Content: content };
export default App;
