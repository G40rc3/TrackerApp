
const checkboxInput = document.getElementById("showPassword");

checkboxInput.addEventListener("click", function () {
  showPassword();
});



function showPassword() {
  const myInput = document.getElementById("password");
  console.log(myInput.type);

  if (myInput.type === "password") {
    myInput.type = "text";
  } else {
    myInput.type = "password";
  }
}


const myForm = document.getElementById("form");



function handleSubmit(event) {
    event.preventDefault(); 
    console.log("I have been submitted");
  
  
  
     console.log("Username", event.target.username.value);
    console.log("Password", event.target.password.value);
  
  }
  
  
  
  myForm.addEventListener("submit", handleSubmitWithFormData);
  
  
  async function handleSubmitWithFormData(event) {
    event.preventDefault();
  
  const data = new FormData(myForm);
  const formValues = Object.fromEntries(data);
  
  console.log("The form values are", formValues);
  
  console.log("The email is", formValues.email);
  
const response= await fetch("http://localhost:8080/userdata",{
  method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify({formValues})
})

 


  }

async function sendChatRequest(event) {
  
  event.preventDefault();
  const userPrompt = event.target.promptInput.value;
  console.log("the prompt is:", userPrompt);

  const response = await fetch("http://localhost:8080/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userPrompt }),
  });

  
  const data = await response.json();
  console.log("The data received back is", data);
  
  const responseP = document.createElement("p");
  responseP.textContent = data;
  responsesContainer.appendChild(responseP);
}






const toggleButton = document.getElementById("tracker-toggle");
const alertButton = document.getElementById("alert-button");



toggleButton.addEventListener('click', function() {
    
    if (toggleButton.classList.contains('off')) {
      toggleButton.classList.remove('off');
      toggleButton.classList.add('on');
      toggleButton.textContent = 'On';
    } else {
      toggleButton.classList.remove('on');
      toggleButton.classList.add('off');
      toggleButton.textContent = 'Off';
    }
})

alertButton.addEventListener('click', function() {
  alertButton.classList.add("clicked")
  alert('This is an alert');
});



function toggleButtons() {
  const SigninButton = document.getElementById("Sign-in-button");
  const groupButton = document.getElementById("Group-button");

  
  
  if (SigninButton.style.opacity === '0') {
    SigninButton.style.opacity = '1';
    groupButton.style.opacity = '0';
  } else {
    SigninButton.style.opacity = '0';
    groupButton.style.opacity = '1';
  }
}
