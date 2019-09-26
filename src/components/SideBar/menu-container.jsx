import React, { Component } from 'react'
import MenuItem from './menu-item.jsx'

export default class MenuContainer extends Component { 
    constructor(props) { 
        super(props)
    }

    state = { 
        menu: {
            selected: "top", // Default option
            top: {
                activeLink: 0,
                links: [ 
                    { name: "Home", icon: "home" },
                    { name: "Browse", icon: "search" },
                    { name: "Radio", icon: "adjust" }
                ]
            },
            library: { 
                activeLink: 0,
                links: [ 
                    { name: "Made for You", icon: null },
                    { name: "Recently Played", icon: null },
                    { name: "Liked Songs", icon: null },
                    { name: "Albums", icon: null },
                    { name: "Artists", icon: null },
                    { name: "Podcasts", icon: null }
                ]
            }
        }
    }

    activeItem = (index, section) => {          
        const menu = this.state.menu

        menu.selected = section
        menu[section].activeLink = index

        this.setState({ menu })
    }

    render() { 
        const menu = this.state.menu
        const { width, left, closeIcon, hideOrShow } = this.props
        
        return (
            <div className="menu-container" style={{ width: width, left: left }}>
                { 
                    closeIcon ? <i className="material-icons close-icon" onClick={ hideOrShow }> close </i> : null 
                }
                <ul className="top">
                    {
                        menu["top"]["links"].map((link, index) => 
                            <MenuItem 
                                key={ index }
                                activate={ () => this.activeItem(index, "top") } 
                                isActive={ menu["selected"] == "top" ? index == menu["top"]["activeLink"] : false }
                                name={ link.name } 
                                icon={ link.icon } 
                            />
                        )
                    }
                </ul>
                <div className="menu-scroll">
                    <ul className="library"> 
                        <li className="label"> Your Library </li>
                        {
                            menu["library"]["links"].map((link, index) => 
                                <MenuItem 
                                    key={ index }
                                    activate={ () => this.activeItem(index, "library") } 
                                    isActive={ menu["selected"] == "library" ? index == menu["library"]["activeLink"] : false }
                                    name={ link.name } 
                                    icon={ link.icon } 
                                />
                            )
                        }
                    </ul>
                    <ul className="library"> 
                        <li className="label"> Playlists </li>
                        {
                            menu["library"]["links"].map((link, index) => 
                                <MenuItem 
                                    key={ index }
                                    activate={ () => this.activeItem(index, "library") } 
                                    isActive={ menu["selected"] == "library" ? index == menu["library"]["activeLink"] : false }
                                    name={ link.name } 
                                    icon={ link.icon } 
                                />
                            )
                        }
                    </ul>
                </div>
                <hr/>
                <div className="newPlaylist"> 
                        <i className="material-icons menuIcon"> add_circle_outline </i>
                        <span> New Playlist </span>
                </div>
            </div> 
        )
    }
}
