import React, { Component } from 'react';
import axios from 'axios';

import { Col, Row, Container } from 'reactstrap';

import CartContext from '../contexts/CartContext';
import Product from '../components/Product';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('/products').then(res => {
            this.setState({
                products: res.data
            });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <CartContext.Consumer>
                        {
                            ({ addProduct }) => {
                                return this.state.products.map(item => <Col lg="3"><Product product={item} func={addProduct} /></Col>)
                            }
                        }
                    </CartContext.Consumer>
                </Row>
            </Container>
        );
    }
}