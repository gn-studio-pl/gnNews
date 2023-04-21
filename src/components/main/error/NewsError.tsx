import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./newsError.css";

export const NewsError = () => {
  let errorMessage;
  const error = useRouteError();
  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="main-content-error">
      <h2>Error</h2>
      <p>{errorMessage}</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};
