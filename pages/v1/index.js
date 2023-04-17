import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
