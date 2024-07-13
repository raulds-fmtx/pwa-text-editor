const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Routes
require('./models/htmlRoutes')(app);

// Start the API server
app.listen(PORT, () => console.log(`🌍 Now listening on http://localhost:${PORT}`));
