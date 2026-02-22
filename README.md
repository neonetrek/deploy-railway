# NeoNetrek — Deploy to Railway

Deploy your own NeoNetrek server on [Railway](https://railway.app) in minutes. No compilation — this repo layers your config on top of a pre-built Docker image.

## Steps

### 1. Fork this repo

Click **Fork** on GitHub.

### 2. Deploy on Railway

1. Sign in to [Railway](https://railway.app) and create a new project.
2. Choose **Deploy from GitHub repo** and select your fork.
3. Railway auto-detects the Dockerfile and starts building.

### 3. Add persistent storage

In your Railway service, go to **Settings → Volumes** and add a volume:

- **Mount path:** `/opt/netrek/var`
- **Size:** 1 GB is plenty

This stores player accounts, stats, and game state so they survive redeploys and restarts.

### 4. Configure networking

Under **Settings → Networking**:

- Expose port **3000** and generate a public domain (this serves the portal and WebSocket proxy).

### 5. Update your config

Edit **`config.json`** — set the server name, location, admin info, motd, and game instances. All server settings live in this single file.

Push the changes — Railway auto-redeploys.

### 6. Customize game instances (optional)

Each entry in the `instances` array configures a separate game mode with its own port and sysdef rules. See the [Server Configuration](https://github.com/neonetrek/client-server/blob/main/HOSTING.md#server-configuration) reference for all options.

### 7. Get listed

Open a PR to [neonetrek/neonetrek.github.io](https://github.com/neonetrek/neonetrek.github.io) adding your server to `servers.json`. Once merged, it appears on all NeoNetrek portals automatically.

See [HOSTING.md](https://github.com/neonetrek/client-server/blob/main/HOSTING.md) for field reference and listing guidelines.

## Persistent data

The volume mounted at `/opt/netrek/var` stores:

| File | Description |
|------|-------------|
| `players` | Player accounts and lifetime stats (binary flat file) |
| `players.index` | GDBM index for fast player lookups by name |
| `scores` | Player rankings |
| `planets` | Planet ownership state |
| `global` | Global server state |

This data survives deploys and restarts. Without a volume, all player data is lost on every redeploy.

## Tips

- Railway injects `PORT` automatically — the base image respects it.
- Use Railway's health check feature pointed at `/health` for monitoring.
- Custom domains are supported under project Settings.
- Pin to a specific release: change `FROM ghcr.io/neonetrek/client-server:main` to `:v1.0.0` in the Dockerfile.
