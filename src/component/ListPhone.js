import React, { Component } from 'react'
import ItemPhone from './ItemPhone'

export default class ListPhone extends Component {

    renderListPhone = () => {
        return this.props.list.map((item,index) => {
            return <ItemPhone item = {item} key={index} 
            changeItemPhone = {this.props.changeItemPhone}
            handleAddToCart = {this.props.handleAddToCart}/>
        })
    }

  render() {

    return (
      <div className='row'>
        {this.renderListPhone()}
      </div>
    )
  }
}
