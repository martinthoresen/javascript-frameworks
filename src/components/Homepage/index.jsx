import React from "react";
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
        <Col className="col-xl-6 m-auto">
          {posts.map((post) => (
            <Card key={post.id}>
              <img src={post.imageUrl} alt={post.title}></img>
              <h2>{post.title}</h2>
              <p>{post.discountedPrice}</p>
              {post.discountedPrice === post.price ? <div></div> : <div>{percentageSale(post.price, post.discountedPrice)}</div>}
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
