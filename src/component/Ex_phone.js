import React, { Component } from 'react'
import Cart from './Cart'
import { data_phone } from './data_phone'
import DetailPhone from './DetailPhone'
import ListPhone from './ListPhone'

export default class Ex_phone extends Component {
    state = {
        listPhone: data_phone,
        detail: data_phone[0],
        cart: [],
    }

    changeItemPhone = (maSp) => {
        let listPhone = this.state.listPhone;
        let index = listPhone.findIndex((item) => item.maSP == maSp)
        this.setState({
            detail: listPhone[index],
        })
    }
    handleAddToCart = (phone) => {
        let cloneCart = [...this.state.cart];
        let index = cloneCart.findIndex((item) => item.maSP == phone.maSP)
        if(index == -1) {
            let newPhone = {...phone, quantity:  1}
            cloneCart.push(newPhone);
        }
        else {
            cloneCart[index].quantity++;
        }
        this.setState({
            cart: cloneCart,
        })
    }
    handleDelete = (maSP) => {
        let newCart = this.state.cart.filter((item) => item.maSP != maSP)
        this.setState({
            cart: newCart,
        })
    }
    handleChangeQuantity = (maSP, luachon) => {
        let cloneCart = [...this.state.cart];
        let index = cloneCart.findIndex((item) => item.maSP == maSP)
        cloneCart[index].quantity += luachon;
        if(cloneCart[index].quantity == 0) {
            cloneCart.splice(index,1)
        }
        this.setState({
            cart: cloneCart,
        })
    }
  render() {
    return (
      <div className='ml-2 mr-2'>
        <h2>Ex_phone</h2>
        <div className='row'>
            <div className="col-6">
                <ListPhone list = {this.state.listPhone} 
                changeItemPhone = {this.changeItemPhone}
                handleAddToCart = {this.handleAddToCart}/>
            </div>
            <div className="col-6">
                <DetailPhone item = {this.state.detail}/>
            </div>
            <div className="col-10 m-auto">
                <Cart cart = {this.state.cart}
                handleDelete = {this.handleDelete}
                handleChangeQuantity = {this.handleChangeQuantity}/>

            </div>
        </div>
      </div>
    )
  }
}
