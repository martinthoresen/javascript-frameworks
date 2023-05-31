import React from "react";
import useApi from "../../hooks/useApi";
import baseUrl from "../Utility/constants/baseUrl";
import percentageSale from "../Utility/percentageSale";

function Homepage() {
  const { data, isLoading, isError } = useApi(baseUrl + "/online-shop");
  const posts = data;
  console.log(data);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data...</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.imageUrl} alt={post.title}></img>
            <h2>{post.title}</h2>
            <p>{post.discountedPrice}</p>
            {post.discountedPrice === post.price ? <div></div> : <div>{percentageSale(post.price, post.discountedPrice)}</div>}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
