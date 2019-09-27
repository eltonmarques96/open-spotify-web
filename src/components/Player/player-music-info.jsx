import React, { Component } from 'react'

export default class PlayerMusicInfo extends Component { 
    render() { 
        return (
            <div className="music-info-container"> 
                <img src="https://www.januaryjane.com/wp-content/uploads/2016/09/music-album-06.jpg" alt="Album teste"/>
                <div className="music"> 
                    <span className="title"> I Don't know Why - Viale & DJ Bruno aaaaaaaaaaaaaaaaaaaaaa</span>
                    <span className="author"> Moony </span> 
                </div>
                <i className="material-icons"> favorite_border </i>
            </div>
        )
    }
}