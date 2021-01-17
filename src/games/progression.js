import game from '../index.js';
import random from '../random.js';

const maxLength = 10;
const progression = (startNum, stepNum, hiddenNum) => {
  const progress = [];
  for (let i = 0; i < maxLength; i += 1) {
    const item = startNum + stepNum * i;
    if (i === hiddenNum) {
      progress.push('..');
    } else {
      progress.push(item);
    }
  }
  return progress.join(' ');
};

const getAnswer = () => {
  const startNum = random(1, 6);
  const stepNum = random(1, 6);
  const hiddenNum = random(1, maxLength - 1);
  const question = progression(startNum, stepNum, hiddenNum);
  const rightAnswer = (startNum + stepNum * hiddenNum).toString();
  return { question, rightAnswer };
};

const condition = 'What number is missing in the progression?';

export default () => game(getAnswer, condition);
