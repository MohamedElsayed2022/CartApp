import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { addToCart } from "./cart-toolkit/cartSlice"; 
import Footer from "./footer/Footer";
import ContactUs from "./Contact-us/ContactUs";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [isSuccess, setIsSuccess] = useState(false); 
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setIsSuccess(true); 
    setShowAlert(true); 
  };
  setTimeout(() => {
    setShowAlert(false); 
    setIsSuccess(false); 
  }, 6000); 



return (
  <>
    <Container className="p-3 mt-3">
    {showAlert && (
        <div className="alert alert-success" role="alert">
          Addation Successfuly
        </div>
      )}

      <Row className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4">
        {products.map((product) => (
          <Col key={product.id} className="col">
            <Card className="mt-5" style={{ backgroundColor: "#3c4044" }}>
              <Card.Img
                variant="top"
                className="text-center w-100 p-2"
                style={{ width: "200px", height: "250px" }}
                src={product.image}
              />
              <Card.Body>
                <Card.Title className="text-light">
                  {product.title.length <= 40
                    ? product.title
                    : `${product.title.slice(0, 18)}...`}
                </Card.Title>
                <Card.Text className="text-light">
                  {product.description.length <= 70
                    ? product.description
                    : `${product.description.slice(0, 70)}...`}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

   
    
  </>
);

}

export default Products;
