const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API for documenting routes',
  },
  host: 'https://cse341-act1.onrender.com',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/temple.js', './routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
