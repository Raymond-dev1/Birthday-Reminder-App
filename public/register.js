const registerForm = document.getElementById("form");

const registerUser = async () => {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value.trim();

  if (!username) {
    alert("Username is required");
    document.getElementById("username").focus();
    return;
  }

  if (!email) {
    alert("Email is required");
    document.getElementById("email").focus();
    return;
  }

  if (!dob) {
    alert("dob is required");
    document.getElementById("dob").focus();
    return;
  }

  //Disable button
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Registering....";

  // console.log("Payload being sent:", { username, email, dob });
  console.log("Registering user with:", username, email, dob);
  console.log(document.getElementById("email").value);
  try {
    const response = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        dob,
      }),
    });

    console.log("Request body:", JSON.stringify({ username, email, dob }));

    const data = await response.json();

    if (!data.success) {
      alert(`Registration failed: ${data.message}`);
      return;
    } else {
      alert("Registration successful!");
      document.getElementById("form").reset();
      alert(`Welcome, ${username}! Your birthday has been registered.`);
    }
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Network error occurred. Please try again.");
  } finally {
    //re-enable button
  }
  submitButton.disabled = false;
  submitButton.textContent = "Register Birthday";
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerUser();
});

// const submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   registerUser();
// });
