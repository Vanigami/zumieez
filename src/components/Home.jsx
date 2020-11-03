import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from "./Navbar"

class Home extends Component {
    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div class="row">
                <div class="col s12 m6">
                  <div class="card" key={item.id}>
                  <span class="card-title">{item.title}</span>
                    <div class="card-image">
                      <img src={item.img}/>
                     
                      <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center">Candies</h3>
                <div className="box">{itemList}</div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.items
    }
}
export default connect(mapStateToProps)(Home)