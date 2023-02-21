import React, { Component } from 'react'

export default class Cart extends Component {
    renderCart = () => {
        return this.props.cart.map((item) => {
            return (
                <tr>
                    <td>{item.maSP}</td>
                    <td><img style={{width: 100}} src={item.hinhAnh} alt="" /></td>
                    <td>{item.tenSP}</td>
                    <td>
                        <button onClick={() => this.props.handleChangeQuantity(item.maSP, -1)} className='btn btn-dark'>-</button>
                        <strong className='p-3'>{item.quantity}</strong>
                        <button onClick={() => this.props.handleChangeQuantity(item.maSP, 1)} className='btn btn-warning'>+</button>
                    </td>
                    <td>{item.giaBan}</td>
                    <td>{item.giaBan * item.quantity}</td>
                    <td>
                        <button onClick={() => this.props.handleDelete(item.maSP)} className='btn btn-danger'>Xoá</button>
                    </td>
                </tr>
            )
        })
    }
  render() {
    return (
      <div className='mt-5'>
        <h2>Giỏ Hàng</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Mã</th>
                </tr>
            </thead>
            <tbody>
                {this.renderCart()}
            </tbody>
        </table>
      </div>
    )
  }
}
