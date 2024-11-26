const { v4: uuidv4 } = require('uuid');
const calculatePoints = require('../logic/receipts');

// In-memory data store
const receiptStore = {};

// POST: Process Receipt
const processReceipt = (req, res) => {
  try {
    const receipt = req.body;

    // Validate receipt
    if (!receipt.retailer || !receipt.purchaseDate || !receipt.purchaseTime || !receipt.items || !receipt.total) {
      return res.status(400).json({ error: 'Invalid receipt format' });
    }

    // Generate unique ID and calculate points
    const receiptId = uuidv4();
    const points = calculatePoints(receipt);

    // Store receipt and points
    receiptStore[receiptId] = { receipt, points };

    // Return receipt ID
    res.status(200).json({ id: receiptId });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET: Get Points by Receipt ID
const getPointsByReceiptId = (req, res) => {
  const { id } = req.params;

  // Check if receipt exists
  if (!receiptStore[id]) {
    return res.status(404).json({ error: 'Receipt not found' });
  }

  // Return points
  res.status(200).json({ points: receiptStore[id].points });
};

module.exports = { processReceipt, getPointsByReceiptId };