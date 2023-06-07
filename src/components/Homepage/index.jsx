import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import baseUrl from "../Utility/constants/baseUrl";
import percentageSale from "../Utility/percentageSale";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

function Homepage() {
  const { data, isLoading, isError } = useApi(baseUrl + "/online-shop");
  const posts = data;
  console.log(data);

  if (isLoading) {
    return <Spinner animation="grow" />;
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }

  return (
    <Container>
      <h1 className="text-center">Products</h1>
      <Row>
        {posts.map((post) => (
          <Col className="col-12 col-sm-4 col-md-3 my-1">
            <div key={post.id} className="p-1">
              <Link to={"/product/" + post.id} className="text-decoration-none text-dark">
                <img src={post.imageUrl} alt={post.title} className="product-image"></img>
                <h2>{post.title}</h2>
                <p>$ {post.discountedPrice}</p>
                {post.discountedPrice === post.price ? <div></div> : <p className="text-danger">{percentageSale(post.price, post.discountedPrice)}</p>}
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Homepage;
