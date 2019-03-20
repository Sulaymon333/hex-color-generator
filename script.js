// DOM Variables
const hexadecimalGenWrapper = document.querySelector('.hexcolorgenerator-app');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const generateButton = document.querySelector('#generate');
const randomGeneratedColorContainer = document.querySelector(
  '.generated-color-container'
);

// EVENT LISTENERS

// form submit event and input validation
form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value === '') {
    if (randomGeneratedColorContainer.innerHTML !== '') {
      randomGeneratedColorContainer.innerHTML = '';
    } else {
      errorMessage();
    }
  } else {
    hexColorGen();
    randomColors();
    input.value = '';
  }
  input.focus();
});

// generated color DIVs click to copy event listener
hexadecimalGenWrapper.addEventListener('click', e => {
  if (e.target.className === 'flex-item') {
    const hexValue = e.target.innerHTML;
    copyToClipboard(hexValue);
  }
});

// FUNCTIONS
// Hex Color generator function
function hexColorGen() {
  let hexValue = '#';
  let random = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    hexValue += random.charAt(Math.floor(Math.random() * random.length));
  }
  return hexValue;
}

// create random color DIVs, insert respective color as background and hex value as text content.
function randomColors() {
  for (let i = 0; i < input.value; i++) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('flex-item');
    colorDiv.style.backgroundColor = `${hexColorGen()}`;
    colorDiv.innerHTML = `${hexColorGen()}`;
    randomGeneratedColorContainer.appendChild(colorDiv);
  }
  // change generate button content to reset
  generateButton.innerHTML = 'Reset';
  generateButton.addEventListener('click', () => {
    generateButton.innerHTML = 'Generate';
  });
}

// Error message function
function errorMessage() {
  input.setAttribute('placeholder', 'Please provide a valid value');
  input.style.borderColor = 'red';
  input.style.WebkitTransform = 'scale(1.05)';
  input.style.transform = 'scale(1.05)';
  input.classList.add('input');
  setTimeout(() => {
    input.setAttribute('placeholder', 'Number of random colors');
    input.style.borderColor = 'rgba(84, 85, 84, 0.7)';
    input.style.transform = 'scale(1)';
    input.classList.remove('input');
  }, 3000);
}

// Copy to clipboard functionality
const copyToClipboard = copiedHexValue => {
  const valueHolder = document.createElement('textarea');
  valueHolder.value = copiedHexValue;
  document.body.appendChild(valueHolder);
  valueHolder.select();
  document.execCommand('copy');
  document.body.removeChild(valueHolder);
};
