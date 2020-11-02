import React, { Component } from 'react'
import Navbar from "./Navbar"
import "../App.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <button class="hamburger hamburger--slider" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>  
             {/* <Navbar /> */}
            </div>
        )
    }
}
