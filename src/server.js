const app = require('./app');

const PORT = 3333;

app.listen(PORT || 3333, () => {
  console.log(`Server up and running on ${PORT} 🛸`);
});
