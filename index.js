const express = require('express');
const app = express();
const districtsRouter = require('./routes/districts'); // Import the router

const port = 3000;

// Use the districts router
app.use('/api/districts', districtsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
