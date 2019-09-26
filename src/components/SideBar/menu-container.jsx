import React, { Component } from 'react'
import MenuItem from './menu-item.jsx'

const menu = { 
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "rgb(18.1, 18.1, 18.1)",
    height: "100vh",
    padding: "50px 0 20px"
}

const closeIcon = { 
    fontSize: '24px',
    position: "absolute",
    right: "20px",
    top: "20px"
}

export default class MenuContainer extends Component { 
    constructor(props) { 
        super(props)
    }

    state = { 
        currentItem: 0,
        menuItems: [ 
            true, false, false
        ]
    }

    activeItem = (position) => {          
        const prevState = this.state.menuItems

        prevState[this.state.currentItem] = !prevState[this.state.currentItem]
        prevState[position] = !prevState[position]

        this.setState({
            menuItems: [...prevState],
            currentItem: position
        })
    }

    render() { 
        const menuItems = this.state.menuItems
        const hasCloseIcon = this.props.closeIcon
        const width = { ...menu, width: this.props.width }
        
        return (
            <div style={ width }>
                { 
                    hasCloseIcon ? <i className="material-icons" style={ closeIcon } onClick={ this.props.hideOrShow }> close </i> : null 
                }
                <ul>
                    <MenuItem activate={ () => this.activeItem(0) } isActive={ menuItems[0] } name="Home" icon="home" />
                    <MenuItem activate={ () => this.activeItem(1) } isActive={ menuItems[1] } name="Browse" icon="search" />
                    <MenuItem activate={ () => this.activeItem(2) } isActive={ menuItems[2] } name="Radio" icon="adjust" />
                </ul>
            </div> 
        )
    }
}
