import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        const { image, name, price, description, quantity } = this.props.selectedProduct;
        return (
            <div className='card p-4 mt-5'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={image} alt="" />
                    </div>
                    <div className='col-7'>
                        <h2>Name:{name}</h2>
                        <h4>Gía:{price}</h4>
                        <h4>Mô tả:{description}</h4>
                        <h4>Số Lượng:{quantity}</h4>
                    </div>

                </div>
            </div>
        )
    }
}
