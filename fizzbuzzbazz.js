
function keyf() {
  return Object.entries(arguments).reduce((r, [i, v]) => r + ((!v) << i), 0);
}


const texts = new Map([
  [keyf(1, 1, 1), v => v],
  [keyf(0, 1, 1), _ => 'Fizz'],
  [keyf(1, 0, 1), _ => 'Buzz'],
  [keyf(1, 1, 0), _ => 'Bazz'],
  [keyf(0, 0, 1), _ => 'FizzBuzz'],
  [keyf(1, 0, 0), _ => 'BuzzBazz'],
  [keyf(0, 1, 0), _ => 'FizzBazz'],
  [keyf(0, 0, 0), _ => 'FizzBuzzBazz'],
]);

console.log(texts);

function main() {
  for(let i = 0; i < 100; i++) {
    const k = keyf(i % 4, i % 6, i % 7);
    console.log(texts.get(k)(i));
  }
}

main();
