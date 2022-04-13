import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  function handleClick() {}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={product.productImage}
        style={{ height: '300px' }}
      />
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title style={{ color: 'black', textDecoration: 'underline' }}>
            {product.name}
          </Card.Title>
        </Link>

        <Card.Subtitle className="mb-2 text-muted">
          {'$' + product.price}
        </Card.Subtitle>
        <Card.Text>{product.category.name}</Card.Text>
        <Button onClick={handleClick} variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
