import readlineSync from 'readline-sync';

const getRandom = (min = 1, max = 101) => Math.floor(Math.random() * (max - min));

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  do {
    const num = getRandom();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === (num % 2 === 0 ? 'yes' : 'no')) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!!!`);
      }
    } else if (answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name}!`);
      i += 3;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}!`);
      i += 3;
    }
  } while (i < 3);
};
