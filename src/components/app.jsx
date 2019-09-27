import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SideBarMenu from './SideBar/sidebar-menu.jsx'
import PlayerContainer from './Player/player-container.jsx'

export default class App extends Component { 
    render() { 
        return (
            <div> 
                <SideBarMenu/>
                <PlayerContainer />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)