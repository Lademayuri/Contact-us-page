document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
  
    // Reset form
    this.reset();
  });