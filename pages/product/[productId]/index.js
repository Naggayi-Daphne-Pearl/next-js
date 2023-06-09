import React from "react";
// dynamic routes
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product Details for {productId}</h1>
    </div>
  );
};

export default ProductDetails;
