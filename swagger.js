const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'Temple API for documenting routes',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/temple.js', './routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
