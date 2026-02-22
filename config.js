/**
 * Portal configuration for your NeoNetrek server.
 * Edit these values to match your deployment.
 *
 * Note: Railway assigns your public domain after the first deploy.
 * Come back and update serverHost / wsProxy once you have it.
 */
window.NEONETREK_PORTAL = {
  serverName: "My NeoNetrek Server",
  serverTagline: "A community Netrek server",
  serverHost: "your-app.up.railway.app:2592",
  wsProxy: "wss://your-app.up.railway.app/ws",
  serverLocation: "US East",
  adminName: "YourName",
  adminContact: "you@example.com",
  motd: "<p>Welcome aboard, pilot!</p>",
  rules: [
    "Be respectful to other players",
    "No automated bots without permission",
    "Team play is encouraged",
    "Have fun!",
  ],
};
