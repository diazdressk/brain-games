import game from '../index.js';
import random from '../random.js';

const gcd = (firstNum, secondNum) => (
  (firstNum % secondNum) ? gcd(secondNum, firstNum % secondNum) : Math.abs(secondNum)
);
const getAnswer = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = gcd(firstNum, secondNum).toString();
  return { question, rightAnswer };
};

const condition = 'Find the greatest common divisor of given numbers.';

export default () => game(getAnswer, condition);
