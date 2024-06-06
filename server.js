const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve the "Under Construction" page middleware
  server.use((req, res, next) => {
    // Allow access to the actual project for local development
    const allowedIps = ['127.0.0.1', '::1']; // Add your development IPs here

    if (!dev && !allowedIps.includes(req.ip)) {
      return res.sendFile(path.join(__dirname, 'under-construction.html'));
    }
    next();
  });

  // Define specific routes if needed
  server.get("/specific-route", (req, res) => {
    // Handle specific route logic here
  });

  // Handle all other requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) {
      console.error("Server failed to start:", err);
      process.exit(1);
    }
    console.log(`Server listening on port ${port}`);
  });
});
