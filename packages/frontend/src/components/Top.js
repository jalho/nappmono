import React from "react";

const Top = () => {
  return (
    <div>
      <h2>nappmono</h2>
      <p>
        Name App Monorepo.
        Source on <a href="https://github.com/jalho/nappmono">GitHub</a>.
      </p>

      <p>
        <span>
          {"Explore the visual GraphQL API endpoint at "}
        </span>
        <a href={process.env.NODE_ENV === "development"
          ? "http://localhost:4000/graphiql"
          : "/graphiql" // relative link when in production
        }>
          <code>/graphiql</code>
        </a>
        <span>.</span>
        <br/>
        <span>{"Client sends requests to "}</span>
        <code>/graphql</code>
        <span>.</span>
      </p>
    </div>
  );
};

export { Top };
