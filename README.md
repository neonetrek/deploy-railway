# NeoNetrek — Deploy to Railway

Deploy your own NeoNetrek server on [Railway](https://railway.app) in minutes. No compilation — this repo layers your config on top of a pre-built Docker image.

## Steps

### 1. Fork this repo

Click **Fork** on GitHub.

### 2. Deploy on Railway

1. Sign in to [Railway](https://railway.app) and create a new project.
2. Choose **Deploy from GitHub repo** and select your fork.
3. Railway auto-detects the Dockerfile and starts building.

### 3. Configure networking

Under **Settings → Networking**:

- Expose port **3000** and generate a public domain (this serves the portal and WebSocket proxy).
- Optionally expose port **2592** (TCP) for native Netrek clients.

### 4. Update your config

Once Railway assigns your domain, edit **`config.js`**:

- Set `serverHost` to your Railway domain
- Set `wsProxy` to `wss://your-domain.up.railway.app/ws`
- Update server name, location, admin info, etc.

Push the changes — Railway auto-redeploys.

### 5. Get listed

Open a PR to [neonetrek/neonetrek.github.io](https://github.com/neonetrek/neonetrek.github.io) adding your server to `servers.json`. Once merged, it appears on all NeoNetrek portals automatically.

See [HOSTING.md](https://github.com/neonetrek/client-server/blob/main/HOSTING.md) for field reference and listing guidelines.

## Tips

- Railway injects `PORT` automatically — the base image respects it.
- Use Railway's health check feature pointed at `/health` for monitoring.
- Custom domains are supported under project Settings.
- Pin to a specific release: change `FROM ghcr.io/neonetrek/client-server:main` to `:v1.0.0` in the Dockerfile.
