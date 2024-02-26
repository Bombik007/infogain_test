const PRICE_THRESHOLD = 100;
const BONUS_THRESHOLD = 50;

export const getBonusPoints = (price) => {
  if (isNaN(price) || price <= BONUS_THRESHOLD) return 0;

  let points = 0;

  if (price >= BONUS_THRESHOLD) {
    points += Math.floor(Math.min(price, PRICE_THRESHOLD) - BONUS_THRESHOLD);
  }

  if (price > PRICE_THRESHOLD) {
    points += Math.floor((price - PRICE_THRESHOLD) * 2);
  }

  return points;
};
