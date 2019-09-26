import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MenuContainer from './menu-container.jsx'

const menuIcon = { 
    fontSize: '48px'
}

export default class SideBarMenu extends Component {

    state = { 
        toggled: true
    }

    toggleMenu = () => { 
        this.setState({ 
            toggled: !this.state.toggled
        })
    }

    render() { 
        return (
            <div>
                <MediaQuery minDeviceWidth={ 1024 }>
                    <MenuContainer closeIcon={ false } width="20%"/>
                </MediaQuery>
                <MediaQuery minDeviceWidth={ 720 } maxDeviceWidth={ 1023 }>
                    <MenuContainer closeIcon={ false } width="20%"/>
                </MediaQuery>
                <MediaQuery minDeviceWidth={ 340 } maxDeviceWidth={ 719 }>
                    <i className="material-icons" style={ menuIcon } onClick={ this.toggleMenu }> menu </i>
                    { this.state.toggled ? null : <MenuContainer hideOrShow={ this.toggleMenu } closeIcon={true} width="50%"/>}
                </MediaQuery>
            </div>
        )
    }
}