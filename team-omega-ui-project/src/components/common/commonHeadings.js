import React, { Component } from 'react';

class CommonHeadings extends Component {
  state = {
    Tag: this.props.type
  }
  //    {/* //calling function */}
  renderHeading(tag, value) {
    switch (tag) {
      case "h1":
        return <h1 className="h1">{value}</h1>;

      case "h2":
        return <h2 className="h2">{value}</h2>;

      case "h3":
        return <h3 className="h3">{value}</h3>;

      case "h4":
        return <h4 className="h4">{value}</h4>

      default:
        return "";
    }
  }

  render() {

    return (
      <div className="headings">

        {this.renderHeading(this.state.Tag, this.props.value)}
        {/* //calling function */}

      </div>
    )
  }
}

export default CommonHeadings;