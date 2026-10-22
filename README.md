# NexCRM — Enterprise Customer Relationship Management System

Moderate full-stack internship project using React + Vite, Node.js, Express, and MongoDB.

## Features
- JWT registration/login with bcrypt password hashing
- Dashboard statistics and lead-status chart
- Lead CRUD, search, and status updates
- Contact creation/list/deletion
- Deal creation/list/stage updates/deletion
- Responsive interface and MongoDB persistence

## Run locally
Requirements: Node.js 18+ and MongoDB (local or Atlas).

1. Backend:
   - `cd server`
   - `npm install`
   - Copy `.env.example` to `.env`; set `MONGODB_URI` and a long random `JWT_SECRET`
   - `npm run dev`
2. Frontend in another terminal:
   - `cd client`
   - `npm install`
   - `npm run dev`
3. Open the Vite URL, register an account, and start adding records.

Backend default: http://localhost:5000. Frontend default: http://localhost:5173.
Optional frontend variable: `VITE_API_URL=http://localhost:5000/api`.

## API
`POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`,
`GET|POST /api/leads`, `PATCH|DELETE /api/leads/:id`,
`GET|POST /api/contacts`, `DELETE /api/contacts/:id`,
`GET|POST /api/deals`, `PATCH|DELETE /api/deals/:id`,
`GET /api/dashboard/summary`, `GET /api/health`.

This is an educational starter, not production-ready. Before public deployment, add comprehensive tests, rate limiting, stronger session handling, and a security review. Records are scoped to their creator.
