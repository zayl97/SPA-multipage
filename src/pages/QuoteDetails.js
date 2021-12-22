import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const params = useParams();

    console.log(`/quotes/${params.quoteId}/comments`);

  return (
    <section>
      <h1>Quote Details Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetails;
