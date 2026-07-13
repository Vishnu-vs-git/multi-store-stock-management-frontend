# Multi-Store Stock Management (MERN)

A full-stack inventory management application built using the **MERN Stack** to manage product inventory across multiple stores.

The application provides secure authentication, role-based authorization, stock initialization, stock adjustments, stock transfers, low-stock monitoring, and a dashboard for inventory statistics.

---

# Features

## Authentication

- JWT Authentication
- Refresh Token Flow
- HTTP-only Cookies
- Password Hashing using bcrypt

## Authorization

- Admin Role
- Shopper Role
- Role-based Route Protection

## Product Management

- Create Product
- View Products
- Unique SKU Validation

## Store Management

- Create Store
- View Stores

## Stock Management

- Initialize Stock
- Adjust Stock
- Transfer Stock Between Stores
- Low Stock Monitoring

## Dashboard

- Total Products
- Total Stores
- Total Stock Entries

## API Documentation

- Swagger / OpenAPI Documentation

## Automated Testing

- Jest
- MongoDB Memory Server
- Business Logic Tests

---

# Tech Stack

## Frontend

- React
- TypeScript
- React Router
- React Hook Form
- Zod
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcrypt
- Zod
- Swagger

---

# Project Structure

```text
multi-store-stock-management
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── constants
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── mappers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── tests
│   │   ├── utils
│   │   └── validators
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── layouts
│   │   ├── modules
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│
├── README.md
└── DESIGN.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd multi-store-stock-management
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file.

```env
PORT=5000

MONGO_URI=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

ACCESS_TOKEN_EXPIRES_IN=15m

REFRESH_TOKEN_EXPIRES_IN=7d

ACCESS_TOKEN_MAX_AGE=900000

REFRESH_TOKEN_MAX_AGE=604800000

NODE_ENV=development

FROND_END_URL=http://localhost:5173
```

Run Backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# Production Build

## Backend

```bash
npm run build
```

## Frontend

```bash
npm run build
```

---

# Demo Credentials

The application automatically creates demo users when the backend starts (if they do not already exist).

| Role | Email | Password |
|------|-------|----------|
| Admin | `vishnu@gmail.com` | `admin123` |
| Shopper | `shopper@example.com` | `shopper123` |

---

# Roles & Permissions

| Role | Permissions |
|------|-------------|
| **Admin** | Dashboard, Products, Stores, Initialize Stock, Adjust Stock, Transfer Stock, Low Stock Monitoring |
| **Shopper** | View Products and Stock (Read-only Access) |

---

# Running Tests

Run all automated tests.

```bash
npm test
```

### Current Test Coverage

- ✅ Stock Initialization
- ✅ Successful Stock Transfer
- ✅ Reject Transfer with Insufficient Stock
- ✅ Prevent Negative Stock During Stock Adjustment

---

# API Documentation

Swagger documentation is available after starting the backend.

```
http://localhost:5000/api-docs
```

---

# Assumptions

- Each Product–Store combination has only one Stock document.
- Stock must be initialized before it can be adjusted or transferred.
- Transfers are only allowed between different stores.
- Stock quantities can never become negative.
- Only authenticated users can access protected APIs.

---

# Available Scripts

## Backend

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Production

```bash
npm start
```

Run Tests

```bash
npm test
```

---

# Future Improvements

- Product Search
- Pagination
- Advanced Filtering
- Stock Movement History
- Audit Logs
- Email Notifications
- Docker Support
- CI/CD Pipeline

---

# Design

Project architecture and implementation details are documented in **DESIGN.md**.

The design document explains:

- Architecture
- Data Model
- Authentication
- Authorization
- Stock Transfer
- Atomic Operations
- Preventing Negative Stock
- Validation
- Testing Strategy

---

# Author

**Vishnu V S**

MERN Stack Developer