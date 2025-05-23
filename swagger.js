const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  openapi: '3.0.0',
  info: {
    title: 'Contacts API',
    description: 'Contacts API for documenting routes',
    version: '1.0.0'
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);