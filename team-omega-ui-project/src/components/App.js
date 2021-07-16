import React from 'react';
import GridComponent from './common/gridComponent';
import '../styles/index.css';
import content from '../mock/mockContent';
import Pagination from './common/pagination';

class App extends React.Component {

  render() {
    const dataSource = this.props.Content.tableData;
    const header = this.props.Content.gridHeader;
    const headerWithStatus = this.props.Content.gridHeaderWithStatus;
    const headerWithActions = this.props.Content.gridHeaderWithAction;
    const isScrolling = true;
    const isPagination = true;
    const hasStatus = false;
    const hasActions = false;
    return (
      <div className="App">
        <GridComponent
          header={header}
          headerWithStatus={headerWithStatus}
          headerWithActions={headerWithActions}
          dataSource={dataSource}
          isPagination={isPagination}
          isScrolling={isScrolling}
          hasStatus={hasStatus}
          hasActions={hasActions} />
        <div >
          <Pagination ispagination={isPagination} />
        </div>

      </div>

    );
  }
}
App.defaultProps = {
  Content: content
}
export default App;
