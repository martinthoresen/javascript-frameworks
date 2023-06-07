import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import baseUrl from "../Utility/constants/baseUrl";
import percentageSale from "../Utility/percentageSale";
import { Container, Card, Row, Col } from "react-bootstrap";
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
      <Row>
        {posts.map((post) => (
          <Col className="col-12 col-sm-4 col-md-3 my-1">
            <Link to="/ShoppingCart" className="text-decoration-none">
              <Card key={post.id} className="p-1">
                <img src={post.imageUrl} alt={post.title} className="card-img"></img>
                <h2>{post.title}</h2>
                <p>{post.discountedPrice}</p>
                {post.discountedPrice === post.price ? <div></div> : <p className="text-danger">{percentageSale(post.price, post.discountedPrice)}</p>}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Homepage;
