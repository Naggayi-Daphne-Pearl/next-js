import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
    </div>
  );
};

export default Home;
