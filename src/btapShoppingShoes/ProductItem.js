import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { image, name, price } = this.props.item;
        return (
            <div className='card p-3'>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <h5> Gía: {price}$</h5>
                <div className='d-flex'>
                    <button onClick={() => { this.props.setSelectedProduct(this.props.item) }} className='btn btn-danger me-2'> Chi Tiết</button>
                    <button onClick={() => { this.props.addToCart(this.props.item) }} className='btn btn-success'> Thêm vào giỏ</button>

                </div>

            </div>
        )
    }
}
