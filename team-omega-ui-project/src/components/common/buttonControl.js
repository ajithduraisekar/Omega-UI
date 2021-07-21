import React, { Component } from 'react';
class ButtonControl extends Component {

        handleonClick() {
                if (this.props.handleClick) {

                        this.props.handleClick()
                }
        }

        renderIcon(icon) {
                switch (icon) {

                        case "send icon":
                                return "fa fa-send-o"
                        case "email send icon":
                                return "fa fa-send-o"
                        case "close icon":
                                return "fa fa-close"
                }
        }
        render() {
                let _icon = this.renderIcon(this.props.icon)
                return (
                        <button className={this.props.className}
                                id={this.props.id}
                                onClick={() => this.handleonClick()}
                                type={this.props.type} >
                                {this.props.name}<i className={_icon} />
                        </button>
                )
        }
}

export default ButtonControl;