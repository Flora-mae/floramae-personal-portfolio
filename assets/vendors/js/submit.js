document.getElementById('submitButton').addEventListener('click', function() {
    // Get form values
    const firstName = document.getElementById('inputFirstName').value;
    const lastName = document.getElementById('inputLastName').value;
    const email = document.getElementById('inputEmail').value;
    const message = document.getElementById('message').value;
  
    // Validate form values (basic example)
    if (!firstName || !lastName || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Create the email body
    const mailtoLink = `mailto:youremail@example.com?subject=Contact from ${firstName} ${lastName}&body=Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  
    // Open the mailto link to send the email
    window.location.href = mailtoLink;
  });
  