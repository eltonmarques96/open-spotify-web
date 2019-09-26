import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MenuContainer from './menu-container.jsx'

export default class SideBarMenu extends Component {

    state = { 
        hidden: true
    }

    toggleMenu = () => { 
        this.setState({ 
            hidden: !this.state.hidden
        })
    }

    render() { 
        return (
            <div>
                <MediaQuery minWidth={ 1024 }>
                    <MenuContainer closeIcon={ false } width="20%"/>
                </MediaQuery>
                <MediaQuery minWidth={ 720 } maxWidth={ 1023 }>
                    <MenuContainer closeIcon={ false } width="30%"/>
                </MediaQuery>
                <MediaQuery minWidth={ 340 } maxWidth={ 719 }>
                    <i className="material-icons menu-icon" onClick={ this.toggleMenu }> menu </i>
                    { 
                        this.state.hidden ? null : <MenuContainer hideOrShow={ this.toggleMenu } closeIcon={true} width="40%"/>
                    }
                </MediaQuery>
            </div>
        )
    }
}