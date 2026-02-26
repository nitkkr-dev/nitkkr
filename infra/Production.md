# 🏗 NITKKR Website – Production Infrastructure Documentation

## 📌 Overview

This document describes the complete self-hosted production infrastructure for the NIT Kurukshetra website.

The system is fully migrated from cloud services (AWS S3, Neon DB) to an **on-premise self-hosted architecture** running inside the institute network.

This infrastructure is designed to be:

- Cost free (self-hosted)
- Fully controllable
- Easily restorable
- Scalable
- Production grade

---

# 🧠 Architecture Overview

## Core Stack

| Layer              | Technology               |
| ------------------ | ------------------------ |
| Frontend + Backend | Next.js (App Router)     |
| Database           | PostgreSQL (self-hosted) |
| File Storage       | MinIO (S3 replacement)   |
| Search             | Typesense                |
| Reverse Proxy      | Caddy                    |
| Containerization   | Docker + Docker Compose  |
| Auth               | Google OAuth             |
| Deployment         | Self-hosted Linux server |

---

# 🖥 Server Specs

| Resource | Value              |
| -------- | ------------------ |
| CPU      | 20 cores           |
| RAM      | 16 GB              |
| Storage  | Local disk         |
| OS       | Ubuntu 24.04       |
| Network  | Institute intranet |

---

# 📁 Directory Structure

```
/home/saac/

 ├── nitkkr-prod/
 │   ├── docker-compose.yml
 │   ├── Caddyfile
 │   ├── data/
 │   │   ├── postgres/
 │   │   ├── minio/
 │   │   └── typesense/
 │
 ├── nitkkr-app/
 │   ├── source code
 │   └── .env.production
```

### Critical data location

```
~/nitkkr-prod/data/
```

This folder contains:

- full database
- all uploaded files
- search index

If this exists → system recoverable.

---

# 🐳 Services Running

## 1. Postgres (Primary DB)

Replaced Neon cloud DB.

**Container:** `nitkkr-postgres`
**Image:** postgres:16-alpine
**Internal only (not public)**

Connection string inside docker:

```
postgresql://nitkkr:PASS@postgres:5432/nitkkr_prod
```

Persistent storage:

```
data/postgres/
```

---

## 2. MinIO (S3 Replacement)

Replaced AWS S3.

Used for:

- faculty images
- documents
- uploads
- static assets

Bucket:

```
nitkkr-public
```

Public access via Caddy:

```
http://SERVER_IP/files/nitkkr-public/...
```

Persistent storage:

```
data/minio/
```

---

## 3. Typesense (Search)

Used for:

- faculty search
- course search
- internal indexing

Persistent storage:

```
data/typesense/
```

Indexes generated from Postgres.

---

## 4. Next.js App

Runs inside docker.

Startup:

```
npm run build && npm start
```

Connected to:

- Postgres
- MinIO
- Typesense

Environment file:

```
.env.production
```

Important env:

```
DATABASE_URL
NEXTAUTH_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
STORAGE_PROVIDER=minio
```

---

## 5. Caddy Reverse Proxy

Handles:

- website routing
- MinIO public files
- domain redirects
- HTTPS (future)

Example routing:

```
/files/* → minio
/ → nextjs app
```

---

# 🚀 Deployment Commands

## Start production

```
docker compose up -d
```

## Rebuild after code change

```
docker compose up -d --build app
```

## Restart only app

```
docker compose restart app
```

## Stop system

```
docker compose down
```

---

# 💾 Backup Strategy

All critical data:

```
~/nitkkr-prod/data/
```

## Weekly backup command

```
tar -czf nitkkr-backup-$(date +%F).tar.gz ~/nitkkr-prod/data
```

Store backup:

- local laptop
- external drive
- cloud (optional)

---

# ♻ Restore Process

If server crashes:

### 1. Install docker

### 2. Copy backup

```
tar -xzf backup.tar.gz
```

### 3. Start system

```
docker compose up -d
```

Site fully restored.

---

# 🔄 Updating Website

```
cd ~/nitkkr-app
git pull
docker compose up -d --build app
```

Zero data loss.

---

# 📊 Logs & Debugging

Check containers:

```
docker ps
```

App logs:

```
docker logs nitkkr-app
```

DB logs:

```
docker logs nitkkr-postgres
```

Caddy logs:

```
docker logs nitkkr-caddy
```

---

# 🌐 Future: Public Domain Setup

When domain comes:

We will enable:

- HTTPS SSL auto
- secure cookies
- production OAuth
- public access

Time required: ~10 min

---

# 🔐 Safety Rules

Never delete:

```
nitkkr-prod/data/
```

Always backup before:

- OS reinstall
- disk change
- major migration
