
function mapValue() {
  let v = 0;
  for(const [i, a] of Object.entries(arguments)) {
    v += a << i;
  }
  return v;
}


const texts = new Map([
  [mapValue(false, false, false), v => v],
  [mapValue(true, false, false), _ => 'Fizz'],
  [mapValue(false, true, false), _ => 'Buzz'],
  [mapValue(false, false, true), _ => 'Bazz'],
  [mapValue(true, true, false), _ => 'FizzBuzz'],
  [mapValue(false, true, true), _ => 'BuzzBazz'],
  [mapValue(true, false, true), _ => 'FizzBazz'],
  [mapValue(true, true, true), _ => 'FizzBuzzBazz'],
]);

function main() {
  for(let i = 0; i < 100; i++) {
    const k = mapValue(i % 4 === 0, i % 6 === 0, i % 7 === 0);
    console.log(texts.get(k)(i));
  }
}

main();
