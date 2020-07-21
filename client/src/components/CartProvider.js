import React, {Component} from 'react';

import CartContext from '../contexts/CartContext';

export default class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(product) {
        this.setState({
            products: [product, ...this.state.products]
        });
    }

    render() {
        return (
            <CartContext.Provider value={{ products: this.state.products, addProduct: this.addProduct }}> 
                { this.props.children }
            </CartContext.Provider>
        );
    }
}