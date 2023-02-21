import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    let {maSP, tenSP, hinhAnh, giaBan} = this.props.item;
    return (
      <div className="col-4">
        <div className="card border-primary h-100">
          <img className="card-img-top" src={hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{giaBan}</p>
            <button onClick={() => {this.props.handleAddToCart(this.props.item)}} className="btn btn-success d-block mb-2 ml-auto mr-auto">Add to cart</button>
            <button onClick={() => {this.props.changeItemPhone(maSP)}} className="btn btn-primary d-block ml-auto mr-auto">Xem chi tiết</button>
          </div>
        </div>
      </div>
    );
  }
}
