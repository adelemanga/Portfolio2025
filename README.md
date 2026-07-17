# Portfolio2025

![Next.js](https://img.shields.io/badge/Next.js-13.4-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=fff)
![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-E10098?logo=graphql&logoColor=fff)
![Docker](https://img.shields.io/badge/Docker-compose-2496ED?logo=docker&logoColor=fff)
![License](https://img.shields.io/badge/License-ISC-blue)

## Overview

Portfolio2025 is a personal developer portfolio built with a Next.js frontend and an Express/Apollo GraphQL backend. The application presents Adèle Manga's profile, projects, blog content, contact form, and customer reviews.

The project is organized as a full-stack repository with separate `frontend` and `backend` applications, plus Docker configuration to run both services together.

## Features

The following features are implemented in the repository:

- Public portfolio homepage with an embedded video background.
- About page introducing Adèle Manga.
- Project showcase with animated project cards powered by Framer Motion.
- Blog page with portfolio-related articles and media.
- Contact form connected to the GraphQL backend.
- Customer review form connected to the GraphQL backend.
- Customer review listing page.
- Responsive header with desktop navigation and mobile drawer navigation.
- Shared footer component.
- Apollo Client integration on the frontend.
- Apollo Server GraphQL API on the backend.
- SQLite persistence through TypeORM.
- Docker Compose setup for frontend and backend services.

## Tech Stack

### Frontend

- Next.js 13.4
- React 18
- TypeScript
- Apollo Client
- GraphQL
- Ant Design
- Framer Motion
- Lucide React
- Tailwind CSS
- CSS modules through the global stylesheet

### Backend

- Node.js
- Express
- Apollo Server
- GraphQL
- TypeGraphQL
- TypeORM
- SQLite
- TypeScript
- CORS

### Tooling

- Docker
- Docker Compose
- GraphQL Code Generator
- ESLint through the Next.js frontend setup

## Project Structure

```text
Portfolio2025/
├── backend/
│   ├── src/
│   │   ├── entities/
│   │   │   ├── Avis.ts
│   │   │   └── Contact.ts
│   │   ├── resolvers/
│   │   │   ├── AvisResolver.ts
│   │   │   └── ContactResolver.ts
│   │   ├── db.ts
│   │   ├── index.ts
│   │   ├── resetDb.ts
│   │   ├── schema.ts
│   │   ├── seed.ts
│   │   └── utils.ts
│   ├── countries.sqlite
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── graphql/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── asset/
│   ├── public/
│   ├── Dockerfile
│   ├── codegen.yml
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── .env.example
```

## Frontend Routes

The frontend uses the Next.js Pages Router. The implemented pages are:

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `frontend/src/pages/index.tsx` | Homepage |
| `/about` | `frontend/src/pages/about.tsx` | About page |
| `/projects` | `frontend/src/pages/projects.tsx` | Project portfolio |
| `/blog` | `frontend/src/pages/blog.tsx` | Blog page |
| `/contact` | `frontend/src/pages/contact.tsx` | Contact form |
| `/customer-advice` | `frontend/src/pages/customer-advice.tsx` | Customer reviews |

## GraphQL API

The backend exposes a GraphQL endpoint at:

```text
http://localhost:4003/graphql
```

Implemented GraphQL operations include:

### Contact

- `getAllContacts`
- `contacts`
- `getOneContactById`
- `addContact`
- `createNewContact`

### Customer Reviews

- `getAllAvis`
- `avis`
- `getOneAviById`
- `addAvis`
- `createNewAvis`
- `deleteAvis`

## Data Model

The backend defines two TypeORM entities:

| Entity | Fields |
| --- | --- |
| `Contact` | `id`, `name`, `lastname`, `email`, `message` |
| `Avis` | `id`, `name`, `lastname`, `message`, `imgUrl`, `rating`, `title` |

The database is configured in `backend/src/db.ts` and uses the SQLite file `backend/countries.sqlite`.

## Environment Variables

The root `.env.example` contains:

```env
PORT=4003
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

The backend code also reads the following variables:

| Variable | Used in | Purpose |
| --- | --- | --- |
| `PORT` | `backend/src/index.ts` | Backend server port. Defaults to `4003`. |
| `CORS_ALLOWED_ORIGINS` | `backend/src/index.ts` | Comma-separated list of allowed frontend origins. Defaults to `http://localhost:3000`. |

The frontend GraphQL client is currently configured directly in `frontend/src/graphql/client.ts` to call:

```text
http://localhost:4003/graphql
```

## Installation

Install dependencies separately for each application:

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

## Running Locally

### Backend

```bash
cd backend
npm run dev
```

The backend starts on port `4003` by default.

### Frontend

```bash
cd frontend
npm run dev
```

The frontend starts with the standard Next.js development server.

## Docker

The repository includes a `docker-compose.yml` file with two services:

| Service | Port | Context |
| --- | --- | --- |
| `backend` | `4003:4003` | `./backend` |
| `frontend` | `3000:3000` | `./frontend` |

Run both services with:

```bash
docker compose up --build
```

## Available Scripts

### Root

| Script | Command | Notes |
| --- | --- | --- |
| `test` | `echo "Error: no test specified" && exit 1` | Placeholder script currently configured in the root `package.json`. |

### Frontend

| Script | Command |
| --- | --- |
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` |
| `codegen` | `graphql-codegen --config codegen.yml --watch` |

### Backend

| Script | Command |
| --- | --- |
| `dev` | `ts-node-dev src/index.ts` |
| `resetDB` | `ts-node-dev src/resetDb.ts` |
| `seed` | `ts-node src/seed.ts` |
| `start` | `ts-node-dev --poll ./src/index.ts` |

## Security Notes

Security-related behavior visible in the code:

- CORS is configured on the backend through `CORS_ALLOWED_ORIGINS`.
- The backend enables credentialed CORS requests.
- The `.gitignore` excludes `.env` files.

No complete authentication flow is implemented in the inspected source files.

## Implementation Notes

- The root `package.json` has only a placeholder `test` script.
- The frontend image upload flow in `Advice.tsx` posts to `/img`, but no matching Next.js API route was found in `frontend/src/pages`.
- The backend dependencies include packages such as `bcrypt`, `jsonwebtoken`, `nodemailer`, and `pg`, but the inspected backend source currently uses SQLite with TypeORM and does not expose a complete authentication, email, or PostgreSQL flow.
- The SQLite database file is named `countries.sqlite` in the current backend configuration. It is kept because it is referenced by `backend/src/db.ts` and mounted by `docker-compose.yml`.

## Author

Adèle Manga

## License

This project is licensed under the ISC license according to the repository `package.json` files.
