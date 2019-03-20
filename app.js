const input = document.querySelector('#input');
const form = document.querySelector('#form');
const randomGeneratedColorContainer = document.querySelector(
  '.generated-color-container'
);

form.addEventListener('submit', e => {
  e.preventDefault();
  randomGeneratedColorContainer.appendChild(colorDiv());
  // hexColorGen();
  // hexColorGen();
});

let num = input.value;

function colorDiv() {
  for (let i = 0; i < num; i++) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('flex-item');
    colorDiv.style.backgroundColor = `${hexColorGen()}`;
    // const span = document.createElement('span');
    // const copyButton = document.createElement('button');
    // copyButton.textContent = 'Copy';
    // colorDiv.appendChild(span);
    // colorDiv.appendChild(copyButton);
  }
  return colorDiv;
}

function hexColorGen() {
  let hexValue = '#';
  let random = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    hexValue += random.charAt(Math.floor(Math.random() * random.length));
  }
  return hexValue;
}
