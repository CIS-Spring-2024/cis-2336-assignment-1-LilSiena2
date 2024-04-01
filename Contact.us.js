<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Form</title>
</head>
<body>

<h2>Simple Form</h2>

<form id="myForm">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br>
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent default form submission
  
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  // You can perform validations here
  
  // Example: Check if name and email are not empty
  if (name.trim() === '' || email.trim() === '') {
    alert('Name and email cannot be empty!');
    return;
  }
  
  // If all validations pass, you can proceed to do something with the form data
  console.log("Name:", name);
  console.log("Email:", email);
  
  // Here you can send the form data to a server, or perform any other desired action
  
  // For demonstration purposes, let's just clear the form
  document.getElementById("myForm").reset();
});
</script>

</body>
</html>
