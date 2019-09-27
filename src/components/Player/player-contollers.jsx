import React, { Component } from 'react'

export default class PlayerControllers extends Component { 
    constructor(props) { 
        super(props)
    }

    render() { 
        return (
            <div className="player-controllers-container" style={{ width: this.props.width }}>
                <div className="controllers"> 
                    <i className="material-icons"> shuffle </i>
                    <i className="material-icons"> skip_previous </i>
                    <i className="material-icons play-icon"> play_circle_outline </i>
                    <i className="material-icons"> skip_next </i>
                    <i className="material-icons"> repeat </i>
                </div>
                <div className="timeline"> 
                    <span> 0:00 </span>
                    <div className="bar"> </div>
                    <span> 3:59 </span>
                </div>
            </div>
        )
    }
}