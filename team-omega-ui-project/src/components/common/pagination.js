import React from 'react';
import content from '../../mock/mockContent';
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      totalRecords: "16",
      offset: "0"
    }
  }
  handleOnChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    const dropdown = this.props.Content.dropdown;
    return ( 
      <div> {this.props.ispagination?
      <div className="container-fluid pagination-container">
        <a href="#previous" aria-label="PreviousIcon"><i className="fa fa-angle-double-left left-icon" title="Previous"></i></a>
        {/* <!--total no of records in pagination--> */}
        <p>Total Records: {this.state.totalRecords}</p>
        {/* <!--total records per page dropdown. Limit upto 50records--> */}
        <label htmlFor="records" className="records-per-page form-label">Records/Page:</label>
        <select className="select-dropdown-records " id="records" name="records">
          {
            dropdown.map((x) => {
              return <option>{x}</option>
            })
          }
        </select>
        {/* <!--go to page textbar--> */}
        <label htmlFor="gotopage" className="gotopage form-label">Goto Page:
          <input type="text" name="gotopage" id="gotopage" className="gotopage-textbox" onBlur={(e) => this.handleOnChange(e)} /> of 5</label>
        <a href="#next" aria-label="NextIcon"><i className="fa fa-angle-double-right right-icon" title="Next"></i></a>
      </div>
:null}</div>
    )
  }

}
Pagination.defaultProps = {
  Content: content
}
export default Pagination;