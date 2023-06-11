import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import baseUrl from "../Utility/constants/baseUrl";
import percentageSale from "../Utility/percentageSale";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function Homepage() {
  const { data, isLoading, isError } = useApi(baseUrl + "/online-shop");
  const items = data;

  if (isLoading) {
    return <Spinner animation="grow" />;
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }

  return (
    <Container>
      <h1 className="text-center mb-5">Products</h1>
      <Row>
        {items.map((item) => (
          <Col className="col-12 col-sm-4 col-md-3 my-1">
            <div key={"products." + item.id} className="d-flex p-1">
              <Link to={"/product/" + item.id} className="text-decoration-none text-dark ">
                <img src={item.imageUrl} alt={item.title} className="product-image"></img>
                <h2>{item.title}</h2>
                <div className="d-flex justify-content-between">
                  <p>${item.discountedPrice}</p>
                  {item.discountedPrice === item.price ? <div></div> : <p className="text-danger">{percentageSale(item.price, item.discountedPrice)}</p>}
                </div>
                <p className="text-secondary text-decoration-underline">View Product</p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Homepage;
