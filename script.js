document.addEventListener('DOMContentLoaded', function () {
    const spamField = document.getElementById('dynamic_spam_protection');
    
    // Array of random names
    const randomNames = ['protection1', 'guardfield', 'safeinput', 'blockerfield', 'inputshield'];
  
    // Select a random name from the array
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    
    // Update the hidden field name with a random value from the array
    spamField.setAttribute('name', randomName);
  
    // Before form submission, check the field value
    const form = document.querySelector('.wpcf7-form');
    form.addEventListener('submit', function (e) {
      if (spamField.value !== '') {
        // If the hidden field is filled, stop form submission
        e.preventDefault();
        alert('Form submission blocked: spam detected.');
      }
    });
  });
  