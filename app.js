const express = require('express');
const expenseController = require('./src/app/controllers/expenseController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/expenses', expenseController);

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
