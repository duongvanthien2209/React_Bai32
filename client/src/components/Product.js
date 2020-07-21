import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function Product({ product, func }) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <Button onClick={() => { func(product) }}>ADD</Button>
                </CardBody>
            </Card>
        </div>
    );
}