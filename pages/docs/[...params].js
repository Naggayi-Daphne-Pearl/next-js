// Catch all routes
// We can then use this array to dynamically generate the page content or fetch data from a backend API, depending on the specific needs of our application.
// In Next.js, catch-all routes (denoted by using [] brackets in the file name) allow for dynamic routes that match any number of URL segments.
// For example, a catch-all route could be defined as pages/posts/[...slug].js, which would match all URLs that start with /posts/, followed by any number of segments (such as /posts/2021/04/my-post-title).

import React from "react";
import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs Home page</h1>
    </div>
  );
};

export default Docs;
