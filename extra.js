function gen() {
  let hexValue = '#';
  let random = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    hexValue += random[Math.floor(Math.random() * random.length)];
  }
  return hexValue;
}
console.log(gen());

function gen2() {
  let n = 6;
  let color = '#';
  while (n--) {
    color += ((Math.random() * 16) | 0).toString(16).toUpperCase();
  }

  return color;
}
console.log(gen2());
