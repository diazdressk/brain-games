import game from '../index.js';
import random from '../random.js';

const operators = ['+', '-', '*'];
const calculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
};

const getAnswer = () => {
  const firstNum = random(1, 20);
  const secondNum = random(1, 20);
  const operator = operators[random(0, operators.length - 1)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = calculate(firstNum, secondNum, operator).toString();
  return { question, rightAnswer };
};

const condition = 'What is the result of the expression?';

export default () => game(getAnswer, condition);
