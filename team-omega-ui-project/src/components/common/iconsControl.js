import React, { Component } from 'react';

class IconsControl extends Component {
        state={
                icon:this.props.icon,
              }
        handleonClick() {
                 if (this.props.handleClick) {

                        this.props.handleClick()
                 }


        }
        renderIcon(icon) {
                switch (icon) {
                        case "envelop":
                                return "fa fa-envelope"
                        case "Add Users":
                                return "fa fa-user-plus "
                        case "User Plus Icon With Property":
                                return "fa fa-user-plus "
                        case "Eye Icon":
                                return "fa fa-eye"
                        case "Edit Icon":
                                return "fa fa-edit"
                        case "Search Icon":
                                return "fa fa-search form-control-feedback"
                        case "Trash Icon":
                                return "fa fa-trash"
                        case "Bull Horn Icon":
                                return "fa fa-bullhorn"
                        case "Clip Board Icon":
                                return "fa fa-clipboard"
                        case "DefaultAngle Left Icon":
                                return "fas fa-angle-left"
                        case "Default Angle Right Icon":
                                return "fas fa-angle-right"
                        case "Angle Left Icon With Property":
                                return "fas fa-angle-left"

                        case "Angle Right Icon With Property":
                                return "fas fa-angle-right"

                        case "Angle Double Right Icon":
                                return "fa fa-angle-double-right right-icon"

                        case "Angle Double Left Icon":
                                return "fa fa-angle-double-left left-icon"
                               
                }
        }

        render() {
               
                let _icon = this.renderIcon(this.state.icon)
                return (
                        <div className="icons">

                                <i className={_icon} onClick={() => this.handleonClick()} />


                        </div>
                )
        }
}

export default IconsControl;