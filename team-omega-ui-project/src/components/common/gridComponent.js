import React from 'react';
import '../../styles/main.css';
import content from '../../mock/mockContent';
class gridComponent extends React.Component {

    handleOnView(e) {
        e.preventDefault();
        this.props.viewHandler(e.target.value);
    }
    handleOnEdit(e) {
        e.preventDefault();
        this.props.editHandler(e.target.value);
    }

    renderHeaderData() {
        if ((this.props.hasStatus && this.props.hasActions) || this.props.hasActions) {
            return this.props.headerWithActions.map(columns => {
                
                return (
                    <th key={columns.id}>{columns.columnHeader}<i className="fa fa-sort-down" id={columns.id}></i></th>
                )
            })
        }
        else if (this.props.hasStatus) {
            
            return this.props.headerWithStatus.map(columns => {
               
                return (
                    <th key={columns.id}>{columns.columnHeader}<i className="fa fa-sort-down" id={columns.id}></i></th>
                )
            })
        }
        else {
           
            return this.props.header.map(columns => {
               
                return (
                    <th key={columns.id}>{columns.columnHeader}<i className="fa fa-sort-down" id={columns.id}></i></th>
                )
            })
        }
    }

    renderTableData() {
        const dataTable = this.props.dataSource
        return dataTable.map((rowdata) => {
            const { sno, id, name, email, status } = rowdata
            return (
                <tr key={id}>
                    <td>{sno}</td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    {this.props.hasStatus ? <td className="status-active" >{status}</td> : null}
                    {this.props.hasActions ?
                        <td><a href="#viewUsersModalPopup" data-toggle="modal" aria-label="viewUserIcon"><i
                            className="fa fa-eye" title="View User" onClick={(e) => this.handleOnView(e)}></i></a>
                            <a href="#editUsersModalPopup" data-toggle="modal" aria-label="editUserIcon"><i className="fa fa-edit"
                                title="Edit User" onClick={(e) => this.handleOnEdit(e)}></i></a>
                        </td> : null}
                </tr>
            )
        })
    }


    renderScrollable() {
        if (this.props.isScrolling) {
            return "scroll-bar"
        }
        return " "
    }
    render() {

        return (
            <div className="layout-controls-storybook" id="layout-controls-storybook">
                <h2>{this.props.Content.heading}</h2>
                <div className={this.renderScrollable()}>
                    <div className="all-users-grid">
                        <table>
                            {/* <!--table header--> */}
                            <thead>
                                <tr>
                                    {this.renderHeaderData()}
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!--table data--> */}
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        )
    }
}

gridComponent.defaultProps = {
    Content: content
}
export default gridComponent;