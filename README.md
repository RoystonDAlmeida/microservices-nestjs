# Microservices Architecture

## Overview
This project implements a microservices architecture using NestJS, RabbitMQ, and an API Gateway. The application consists of four main components located in the root directory:

- **API Gateway**: Routes requests to the appropriate microservices.
- **User Service**: Manages user authentication and profiles.
- **Product Service**: Handles product listings and inventory management.
- **Order Service**: Processes customer orders and payment handling.

## Features
- Asynchronous communication between services using RabbitMQ.
- Centralized API Gateway for routing requests.
- Separate services for user management, product catalog, and order processing.

## Requirements
- Node.js (version 14 or later)
- RabbitMQ server

## Microservices

### 1. API Gateway

#### Description
The API Gateway serves as the single entry point for all client requests to the microservices. It routes requests to the appropriate service, handles authentication, and manages load balancing.

#### Setup
- Navigate to the API Gateway directory:
   ```bash
   cd api-gateway

- Install dependencies:
  ```bash
  npm install

- Start the API Gateway:
  ```bash
  npm run start

- Testing
Use Postman to send requests to the API Gateway at http://localhost:<port>/api/.

### 2. User Service

#### Description
The User Service handles user authentication, registration, and profile management. It provides endpoints for user-related operations.

#### Setup
- Navigate to the User Service directory:
  ```bash
  cd user_service

- Install dependencies:
  ```bash
  npm install

- Start the User Service:
  ```bash
  npm run start

- Testing
Use Postman to test endpoints like:
1. POST /get_users
- Body:{ "cmd":"get_users" }

2. POST /create_user
- Body:{ "cmd":"create_user", data }

### 3. Product Service

#### Description
The Product Service manages product listings, categories, and inventory. It provides APIs for CRUD operations on products.

#### Setup
- Navigate to the Product Service directory:
  ```bash
  cd product_service

- Install dependencies:
  ```bash
  npm install

- Start the Product Service:
  ```bash
  npm run start

- Testing
Use Postman to test endpoints like:
1. POST /get_products
- Body:{ "cmd":"get_products" }

2. POST /create_product
- Body:{ "cmd":"create_product", data }

### 4. Order Service

#### Description
The Order Service processes customer orders, manages payment handling, and maintains order history.

#### Setup
- Navigate to the Order Service directory:
  ```bash
  cd order_service

- Install dependencies:
  ```bash
  npm install

- Start the Order Service:
  ```bash
  npm run start

- Testing
Use Postman to test endpoints like:
1. POST /get_orders
- Body:{ "cmd":"get_orders" }

2. POST /create_order
- Body:{ "cmd":"create_order", data }


Add RabbitMQ url connection string in .env