import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SideBarMenu from './SideBar/sidebar-menu.jsx'

export default class App extends Component { 
    render() { 
        return (
            <SideBarMenu/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)