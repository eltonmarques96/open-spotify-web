import React from 'react'

const MenuItem = ({ activate, isActive, name, icon }) => { 
    return (
        <li onClick={ () => activate() } className={ isActive ? "activeItem" : null }>
            <i className="material-icons menuIcon"> { icon } </i> 
            <span> { name } </span>
        </li>
    )
}

export default MenuItem