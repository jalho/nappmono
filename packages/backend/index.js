import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import express from "express";
import fs from "fs";
import { gql } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import { promisify } from "util";

const readFilePrms = promisify(fs.readFile);

const typeDefs = gql`

  type Name {
    name: String
    amount: Int
  }

  type Query {
    "Get all names and their respective amounts."
    allNames: [Name]!
    "Get the amount of a specific name."
    amount(name: String): Int
  }
`;

// TODO: Modularize data fetching to services!
const resolvers = {
  Query: {
    allNames: async () => {
      const namesData = await readFilePrms("names.json");
      const { names } = JSON.parse(namesData);
      return names;
    },
    amount: async (_parent, args) => {
      const namesData = await readFilePrms("names.json");
      const { names } = JSON.parse(namesData);
      const name = names.find(
        n => n.name.toLowerCase() === args.name.toLowerCase()
      );
      return name ? name.amount : 0;
    }
  }
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

const app = express();

// request endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// visual endpoint
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const PORT = process.env.PORT || 4000; // 4000 in development environment
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
