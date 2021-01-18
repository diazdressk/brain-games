import game from '../index.js';
import random from '../random.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = () => {
  const question = random(3, 30);
  const rightAnswer = (isPrime(question) ? 'yes' : 'no');
  return { question, rightAnswer };
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => game(getAnswer, condition);
