import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import baseUrl from "../Utility/constants/baseUrl";
import percentageSale from "../Utility/percentageSale";
import useApi from "../../hooks/useApi";

function Product() {
  let params = useParams();
  const { data, isLoading, isError } = useApi(baseUrl + "/online-shop/" + params.id);
  const post = data;

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
          <div key={post.id} className=" d-flex flex-column align-items-center flex-md-row justify-content-center">
            <img src={post.imageUrl} alt={post.title} className="card-img"></img>
            <div>
              <h2>{post.title}</h2>
              <p>$ {post.discountedPrice}</p>
              {post.discountedPrice === post.price ? <div></div> : <p className="text-danger">{percentageSale(post.price, post.discountedPrice)}</p>}
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
}

export default Product;
