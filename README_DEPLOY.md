# Deployment — Vercel (frontend) + Render (backend)

## Overview
This guide shows how to create a GitHub repository for the CloudSync project and set up:
- Frontend: Vercel (recommended) — uses `frontend/` (Vite + React + Tailwind)
- Backend: Render — uses `backend/` (Express)

## 1) Push code to GitHub
1. Create a new repository on GitHub, e.g. `cloudsync-website`.
2. Push the project root (all files) to the `main` branch.

## 2) Vercel — Frontend
1. Go to https://vercel.com and import your GitHub repo.
2. When configuring the project:
   - Root directory: `frontend`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add Environment Variables:
   - `VITE_API_URL` = `https://<your-render-backend-url>` (set after backend deploy)
4. Deploy. Vercel will provide a production URL like `https://your-project.vercel.app`.

## 3) Render — Backend
Option A: Quick (UI)
1. Go to https://render.com and create a new Web Service.
2. Connect your GitHub repo and pick branch `main`.
3. Set the root directory to `/` and start command `cd backend && npm install && npm start`.
4. Add Environment Variables in Render dashboard:
   - `SENDGRID_API_KEY`, `FROM_EMAIL`, `ADMIN_EMAIL`, `ADMIN_JWT_SECRET`, `ADMIN_PASSWORD_HASH`
5. Deploy. Render will provide a URL like `https://cloudsync-backend.onrender.com`.

Option B: One-click (render.yaml)
- The `render.yaml` file in the repo can be used to create a one-click service on Render. Replace the `repo:` field with your GitHub repo URL and then on Render import the YAML.

## 4) Finalize
- Set `VITE_API_URL` on Vercel to the Render backend URL (e.g. `https://cloudsync-backend.onrender.com`).
- Configure CORS on backend to allow your Vercel domain if needed.

## Notes
- Keep secrets (API keys, JWT secret) in the platform's environment settings (Vercel / Render).
- For production file uploads, use S3 or DigitalOcean Spaces and store credentials in Render.
