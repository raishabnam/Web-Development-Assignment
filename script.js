document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup-form");
    const predefinedUsernames = ["user1", "user2", "john_doe"]; // Predefined list of existing usernames
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form submission
  
      // Retrieve input values
      const username = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();
  
      // Clear previous error messages
      clearErrors();
  
      // Validate each field and show error messages if needed
      let isValid = true;
  
      if (username === "") {
        showError("name", "Username cannot be empty.");
        isValid = false;
      } else if (predefinedUsernames.includes(username)) {
        showError("name", "Username already exists. Please choose a different one.");
        isValid = false;
      }
  
      if (!validateEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
      }
  
      if (!validatePassword(password)) {
        showError("password", "Password must be at least 6 characters and contain uppercase, lowercase, numbers, and special characters.");
        isValid = false;
      }
  
      if (password !== confirmPassword) {
        showError("confirm-password", "Passwords do not match.");
        isValid = false;
      }
  
      // If all fields are valid, submit the form or show a success message
      if (isValid) {
        alert("Signup successful!");
        // You can uncomment the line below to submit the form once validations pass
        // signupForm.submit();
      }
    });
  
    // Helper function to validate email using a regular expression
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    // Helper function to validate password (min 6 chars, uppercase, lowercase, number, special char)
    function validatePassword(password) {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
      return passwordPattern.test(password);
    }
  
    // Helper function to show error messages
    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.innerText = message;
      field.parentNode.appendChild(errorMessage);
      field.classList.add("error");
    }
  
    // Helper function to clear previous error messages
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((msg) => msg.remove());
  
      const errorFields = document.querySelectorAll(".error");
      errorFields.forEach((field) => field.classList.remove("error"));
    }
  });
  