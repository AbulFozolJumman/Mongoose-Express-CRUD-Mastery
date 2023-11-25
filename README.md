## Server Vercel Link

- https://assignment-2-o6upiwrvq-abulfozoljumman.vercel.app/

## Running the Program Locally

1. Clone the repository:

2. Install dependencies:

   npm install

3. Start the server:

   npm run build
   npx ts-node-dev --respawn --transpile-only le-only src/server.ts

4. The server runs at [http://localhost:3000/](http://localhost:3000/)

5. Use a tool like Postman or a web browser to test the API endpoints.

## User Management Functions:

1. **Create a New User**

   - API Endpoint: `POST /api/users`

2. **Retrieve a List of All Users**

   - API Endpoint: `GET /api/users`

3. **Retrieve a Specific User by ID**

   - API Endpoint: `GET /api/users/:userId`

4. **Update User Information**

   - API Endpoint: `PUT /api/users/:userId`

5. **Delete a User**
   - API Endpoint: `DELETE /api/users/:userId`

## Order Management Functions:

1. **Add New Product in Order**

   - API Endpoint: `PUT /api/users/:userId/orders`

2. **Retrieve all orders for a specific user**

   - API Endpoint: `GET /api/users/:userId/orders`

3. **Calculate Total Price of Orders for a Specific User**
   - API Endpoint: `GET /api/users/:userId/orders/total-price`
