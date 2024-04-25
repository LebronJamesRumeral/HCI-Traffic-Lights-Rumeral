const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

let currentLight = 'red';

function changeLight() {
  redLight.style.backgroundColor = 'black';
  yellowLight.style.backgroundColor = 'black';
  greenLight.style.backgroundColor = 'black';

  switch (currentLight) {
    case 'red':
      currentLight = 'green';
      greenLight.style.backgroundColor = 'green';
      break;
    case 'green':
      currentLight = 'yellow';
      yellowLight.style.backgroundColor = 'yellow';
      break;
    case 'yellow':
      currentLight = 'red';
      redLight.style.backgroundColor = 'red';
      break;
  }

  const randomTime = Math.floor(Math.random() * (9000 - 6000 + 1)) + 6000; // Generate random time between 6 and 9 seconds in milliseconds
  setTimeout(changeLight, randomTime);
}

changeLight(); // Start the light cycle
