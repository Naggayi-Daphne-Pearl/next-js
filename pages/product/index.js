// dynamic routes
import React from "react";
// client side routes using Link
import Link from "next/link";

const index = ({ productId = 100 }) => {
  return (
    <div>
      <Link href="/">
        <h2>Home Page</h2>
      </Link>
      <Link href="/product/1">
        <h1>Product 1 </h1>
      </Link>
      <Link href="/product/2">
        <h1>Product 2 </h1>
        {/* If you want to replace the current page in the browser history instead of adding a new entry when clicking the Link component, you can use the replace prop. */}
      </Link>
      <Link href="/product/3" replace>
        <h1>Product 3 </h1>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </div>
  );
};

export default index;
