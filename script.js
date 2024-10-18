//your JS code here. If required.
      function displayFormInfo(event) {
            event.preventDefault(); // Prevent the form from submitting and reloading the page
            
            // Get form values
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var emailID = document.getElementById("emailID").value;

            // Create the alert message
            var alertMessage = "First Name: " + firstName + " Last Name: " + lastName + 
                               " Phone Number: " + phoneNumber + " Email ID: " + emailID;

            // Display the alert
            alert(alertMessage);
        }
