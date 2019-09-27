import React, { Component } from 'react'

export default class PlayerOptions extends Component { 
    constructor(props) { 
        super(props)
    }

    render() { 
        return (
            <div className="player-option-container" style={{ maxWidth: this.props.width }}> 
                <i className="material-icons"> playlist_play </i>
                <i className="material-icons"> devices </i>
                <div className="bar">
                    <i className="material-icons"> volume_up </i>
                    <div> </div>
                </div>
                <i className="material-icons"> fullscreen </i>
            </div>
        )
    }
}