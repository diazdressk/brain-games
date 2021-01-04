import game from '../index.js';
import random from '../random.js';

const isEven = (num) => num % 2 === 0;

const getAnswer = () => {
  const question = random();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => game(getAnswer, condition);
