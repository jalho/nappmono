# Creating a full stack monorepo

**React** frontend and **Node.js** backend in a single repository using **Yarn Workspaces**.

1.
    Create a `fullstackmonorepo` directory and `cd` into there.
    
    This is now the monorepo's root directory.
2.
    Initialize monorepo structure by `yarn init -y`.
    
    Edit the generated `package.json`:
        
        + "private": true
        + "workspaces": ["packages/*"]
        - "main": "index.js"
3.
    Create a `packages` directory.

    <details>
    <summary>How the repository looks now:</summary>

    ```
    fullstackmonorepo
    │   package.json
    │   
    └───packages
    ```
    </details>

4.
    Create dirs `backend` and `frontend` under `packages/`.

5.
    Initialize a React app into `frontend/` with CRA:
    
        $ npx create-react-app packages/frontend

    <details>
    <summary>How the repository looks now:</summary>

    ```
    fullstackmonorepo
    │   package.json
    │   yarn.lock
    │   
    ├───node_modules
    │       ...                 # modules are here in root dir
    │
    └───packages
        ├───backend
        │       ...             # empty dir for now
        └───frontend
            │   .gitignore
            │   package.json
            │   README.md
            │   yarn.lock
            │   
            ├───node_modules
            │   │               # modules are not here, but in root dir
            │   └───.bin
            │           react-scripts
            │           react-scripts.cmd
            │           
            ├───public
            │       ...
            │       
            └───src
                    ...
    ```
    </details>