const calculatePoints = (receipt) => {
  let points = 0;

  // 1. Alphanumeric characters in retailer name
  points += (receipt.retailer.match(/[a-zA-Z0-9]/g) || []).length;

  // 2. Round dollar total
  if (parseFloat(receipt.total) === Math.floor(receipt.total)) {
    points += 50;
  }

  // 3. Multiple of 0.25
  if (receipt.total % 0.25 === 0) {
    points += 25;
  }

  // 4. Points for every 2 items
  points += Math.floor(receipt.items.length / 2) * 5;

  // 5. Description length multiple of 3
  receipt.items.forEach((item) => {
    const trimmedLength = item.shortDescription.trim().length;
    if (trimmedLength % 3 === 0) {
      points += Math.ceil(parseFloat(item.price) * 0.2);
    }
  });

  // 6. Odd purchase day
  const day = parseInt(receipt.purchaseDate.split('-')[2], 10);
  if (day % 2 !== 0) {
    points += 6;
  }

  // 7. Time between 2:00pm and 4:00pm
  const [hour, minute] = receipt.purchaseTime.split(':').map(Number);
  if (hour === 14 || (hour === 15 && minute === 0)) {
    points += 10;
  }

  return points;
};

module.exports = calculatePoints;