import React, { useState } from "react";
import { Col, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import baseUrl from "../Utility/constants/baseUrl";
import percentageSale from "../Utility/percentageSale";
import useApi from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utility/cartSlice";

function Product() {
  let params = useParams();
  const { data, isLoading, isError } = useApi(baseUrl + "/online-shop/" + params.id);
  const item = data;

  const [addedToCart, setAddedToCart] = useState("");
  const handleAddToCart = () => {
    setAddedToCart("Item has been added to your cart.");
  };

  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner animation="grow" />;
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }
  return (
    <div>
      <Col>
        <Row className="col-11 col-sm-8 col-lg-5 m-auto">
          <div key={item.id} className=" d-flex flex-column align-items-center flex-md-row justify-content-center">
            <img src={item.imageUrl} alt={item.title} className="card-img"></img>
            <div>
              <h1>{item.title}</h1>
              <p>${item.discountedPrice}</p>
              {item.discountedPrice === item.price ? <div></div> : <p className="text-danger">{percentageSale(item.price, item.discountedPrice)}</p>}
              <p>{item.description}</p>
              <Button
                onClick={() => {
                  dispatch(addToCart(item));
                  handleAddToCart();
                }}
              >
                Add to Cart
              </Button>
              <p className="text-success">{addedToCart}</p>
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
}

export default Product;
