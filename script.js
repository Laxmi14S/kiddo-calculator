// Append value to the calculator display
function appendValue(value) {
  document.getElementById('display').value += value;
}

// Clear the calculator display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Calculate the result
function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    console.error('Calculation error:', error);
  }
}

// Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(registration => {
      console.log('Service Worker Registered!', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
