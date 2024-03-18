const express = require('express');
const Expense = require('../models/expense');

const router = express.Router();

// Rota para Cadastro de Despesa (POST)
router.post('/', async (req, res) => {
  const { name, purchaseDate, dueDate, amount, store, installments, numberOfInstallments, installmentValue, paymentMethod, purchasedBy } = req.body;

  const expense = new Expense({
    name,
    purchaseDate,
    dueDate,
    amount,
    store,
    installments,
    numberOfInstallments,
    installmentValue,
    paymentMethod,
    purchasedBy,
  });

  try {
    await expense.save();
    res.status(201).json({ message: 'Despesa cadastrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar despesa:', error);
    res.status(500).json({ error: 'Erro ao cadastrar despesa' });
  }
});

// Rota para Listagem de Despesas (GET)
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json({ expenses });
  } catch (error) {
    console.error('Erro ao listar despesas:', error);
    res.status(500).json({ error: 'Erro ao listar despesas' });
  }
});

// Rota para Detalhes de Despesa (GET)
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ error: 'Despesa não encontrada' });
    }

    res.status(200).json({ expense });
  } catch (error) {
    console.error('Erro ao buscar detalhes da despesa:', error);
    res.status(500).json({ error: 'Erro ao buscar detalhes da des despesa' });
  }
});

module.exports = router;
