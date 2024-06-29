const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define specific routes if needed
  server.get("/specific-route", (req, res) => {
    // Handle specific route logic here
    res.send("Specific route logic");
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
