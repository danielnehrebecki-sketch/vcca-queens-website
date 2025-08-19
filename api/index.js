// api/index.js

const express = require('express');
const path = require('path');
const app = express();

const featuredCars = [
    { id: 1, name: '1957 Chevrolet Bel Air', owner: 'John D.', image: 'bel-air.jpg' },
    { id: 2, name: '1969 Chevrolet Camaro', owner: 'Jane C.', image: 'camaro.jpg' },
    { id: 3, name: '1955 Chevrolet Nomad', owner: 'Mike B.', image: 'nomad.jpg' },
    { id: 4, name: '1967 Chevrolet Impala', owner: 'Sarah M.', image: 'impala.jpg' },
];

app.get('/api/featured-cars', (req, res) => {
  res.json(featuredCars);
});

// IMPORTANT: Vercel doesn't need the static file serving or app.listen part.
// The vercel.json file will handle routing to your static files.
// We just need to export the app.

module.exports = app;
