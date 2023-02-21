import React, { Component } from 'react'

export default class DetailPhone extends Component {
  render() {
    let {tenSP, manHinh, hinhAnh, heDieuHanh, cameraTruoc, cameraSau, ram, rom} = this.props.item;
    return (
      <div className='row h-100'>
        <div className="col-5">
            <div className="card text-center border-0 ">
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                </div>
                <img className="card-img-top" src={hinhAnh} alt='' />
            </div>
        </div>
        <div className="col-7">
            <table className='table text-left'>
                <thead>
                    <tr>
                        <th>Thông số kỹ thuật</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Màn hình</td>
                        <td>{manHinh}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành</td>
                        <td>{heDieuHanh}</td>
                    </tr>
                    <tr>
                        <td>Camera trước</td>
                        <td>{cameraTruoc}</td>
                    </tr>
                    <tr>
                        <td>Camera sau</td>
                        <td>{cameraSau}</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>{ram}</td>
                    </tr>
                    <tr>
                        <td>ROM</td>
                        <td>{rom}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
