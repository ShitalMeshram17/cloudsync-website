# CloudSync — Full Website (Frontend + Backend)

This archive contains:
- frontend/: Vite + React + Tailwind frontend
- backend/: Express backend with contact endpoint and basic admin routes

## Quick start (local)
1. Frontend:
   cd frontend
   npm install
   npm run dev

2. Backend:
   cd backend
   npm install
   # create .env from .env.example and set SENDGRID_API_KEY if you want emails
   npm run dev

The frontend expects backend endpoints under /api/* (when running locally you may need to use a proxy or run backend with the same host).
