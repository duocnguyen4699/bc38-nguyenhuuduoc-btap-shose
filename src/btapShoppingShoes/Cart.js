import React, { Component } from 'react'

export default class Cart extends Component {
    countTotalAmount = () => {
        // return tong tien
        return this.props.cart.reduce((prevValue, currentItem) => {
            return prevValue + currentItem.quantity * currentItem.product.price;

        }, 0);
    }
    renderCart = () => {
        return this.props.cart.map((item, index) => {
            const { image, name, price } = item.product;
            const { quantity } = item;
            return <tr >
                <td>{index}</td>
                <td>
                    <img style={{ width: 70, }} src={image} alt="" />
                </td>
                <td>{name}</td>
                <td>
                    <button onClick={()=>this.props.decreaseQuantity(item.product.id)} className='btn btn-info' type="">-</button>
                    <span>{quantity}</span>
                    <button onClick={()=>this.props.increaseQuantity(item.product.id)} className='btn btn-info' type="">+</button>
                </td>
                <td>{price}</td>
                <td>{price * quantity}</td>
                <td>
                    <button onClick={() => { this.props.deleteCartItem(item.product.id) }} className='btn btn-danger'>delete</button>
                </td>


            </tr>
        })
    }
    render() {
        return (
            <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ Hàng</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>số thứ tự</th>
                                        <th> hình ảnh</th>
                                        <th>tên sp</th>
                                        <th>số lượng</th>
                                        <th>đơn giá</th>
                                        <th>thành tiền</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                            </table>
                            <h2>Tổng Tiền:{this.countTotalAmount()}</h2>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={()=>this.props.checkOut()} type="button" className="btn btn-primary">Pay</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
