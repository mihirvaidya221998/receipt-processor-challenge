const express = require('express');
const {
  processReceipt,
  getPointsByReceiptId,
} = require('../controllers/receipts.js');

const router = express.Router();

// POST: Process a receipt
router.post('/process', processReceipt);

// GET: Get points by receipt ID
router.get('/:id/points', getPointsByReceiptId);

module.exports = router;