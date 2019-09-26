import React from 'react'

const activeItem = { 
    borderLeft: "5px solid #1DD15D"
}

const menuIcon = { 
    fontSize: '24px'
}

const MenuItem = ({ activate, isActive, name, icon }) => { 
    return (
        <li onClick={ () => activate() } style={ isActive ? activeItem : null }>
            <i className="material-icons" style={ menuIcon }> { icon } </i> 
            <span> { name } </span>
        </li>
    )
}

export default MenuItem