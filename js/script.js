// Popup that appears when the page is loaded
window.onload = function() {
    showWelcomePopup();
}

// Function to display a welcome popup
function showWelcomePopup() {
    alert("Welcome to Innomatics Research Lab");
}

// Example: A dummy function to show form submission success
function submitForm() {
    // Get form data
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    // Basic form validation (just for demonstration)
    if (name === '' || contact === '' || email === '') {
        alert('Please fill out all fields');
        return false;
    }

    // Display a success message for now (no actual submission)
    alert(`Form Submitted Successfully!\nName: ${name}\nContact: ${contact}\nEmail: ${email}`);

    // Reset form fields after submission
    document.getElementById('contactForm').reset();
    return false; // Prevent default form submission behavior
}

// Example: Dummy function to change text dynamically
function changeHeroText() {
    document.querySelector('.hero h1').textContent = "Welcome to the Future of Learning";
}
