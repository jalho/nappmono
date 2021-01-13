# nappmono: Name Application Monorepo

Repository contains backend and frontend for a web application that shows names. They can be found under [`packages/`](packages). Full stack web dev project. 

Explanation on how I set up this monorepo is at [monorepo_guide.md](monorepo_guide.md).

## Scripts

Script names in [`package.json`](package.json) are verbose because Heroku would unintendedly [automatically run](https://devcenter.heroku.com/changelog-items/1557) a script named just *build*.

### Starting the development environment

* **Server (backend)**

        cd packages/backend
        yarn start:dev

  *Starts the server at `localhost:4000`, providing visual endpoint at `/graphiql` and request endpoint at `/graphql`.*

* **Client (frontend)**

        cd packages/frontend
        yarn start
  
  *Starts the default *Create React App* development server at `localhost:3000` and opens it in a browser.*

### Deploying on Heroku

1. Prepare the repository for deploying:

        npm run prepareForDeploy

    *Removes old UI builds from frontend and backend, builds a new one in frontend and copies it to `backend/ui_prod_build/`*.

2. Commit and push changes. The app is published at [nappmono.herokuapp.com](https://nappmono.herokuapp.com/). If there has been no traffic for 30 minutes, there will be a short delay (~ 15 seconds) until the app is accessible.

## Backend

GraphQL backend as **Apollo Server**'s **Express** implementation running in **Node.js**.

## Frontend

**React** app with caching GraphQL client implementation **Apollo Client**.

## Motivation

Coding challenge and practise. No practical use cases. Challenge instructions [here](https://github.com/solita/dev-academy-2021) (accessed 11 Jan 2021).
