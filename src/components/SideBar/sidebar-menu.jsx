import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MenuContainer from './menu-container.jsx'

export default class SideBarMenu extends Component {

    state = { 
        hidden: true,
        left: "-400px"
    }

    hideOrShow = () => { 
        this.setState({ 
            left: this.state.hidden ? "0px" : "-400px",
            hidden: !this.state.hidden
        })
    }

    render() { 
        return (
            <div>
                <MediaQuery minWidth={ 1024 }>
                    <MenuContainer closeIcon={ false } width="20%" left="0px"/>
                </MediaQuery>
                <MediaQuery minWidth={ 720 } maxWidth={ 1023 }>
                    <MenuContainer closeIcon={ false } width="30%" left="0px"/>
                </MediaQuery>
                <MediaQuery minWidth={ 340 } maxWidth={ 719 }>
                    <i className="material-icons menu-icon" onClick={ this.hideOrShow }> menu </i>
                    { 
                        <MenuContainer hideOrShow={ this.hideOrShow } closeIcon={true} width="40%" left={ this.state.left }/>
                    }
                </MediaQuery>
            </div>
        )
    }
}