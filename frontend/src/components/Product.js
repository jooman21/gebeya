import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
function Product(props){
    const { product } = props;
    return (
    <Card className="product" key={product.slug}>
        <Link to= {`/product/${product.slug}`}>
          <img src={product.image} className="Card-img-top" alt={Product.name} />
        </Link>
        <Card.Body>
        <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
        </Link>
        <Button>Add to Cart</Button>
        </Card.Body>    
    </Card>
    )
    
}
export default Product;