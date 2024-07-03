let submitButton = document.getElementById('submit-button');
let fullNameInput = document.getElementById('fullname');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

let emailCheck = /^\w+@[a-zA-Z_]+?/

function validateForm() {
  
    let data = {};
    let errors = [];

   
    if (fullNameInput.value.trim() !== '') {
        data.fullName = fullNameInput.value.trim();
    } else {
        errors.push('Full name is required.');
    }


    if (emailInput.value.trim() !== '') {
      
        if (emailCheck.test(emailInput.value.trim())) {
           
            data.email = emailInput.value.trim();
        } else {
          
            errors.push('Invalid email format.');
        }
    } else {
        
        errors.push('Email is required.');
    }

   
    if (messageInput.value.trim() !== '') {
       
        data.message = messageInput.value.trim();
    } else {
        
        errors.push('Message is required.');
    }

   
    if (errors.length > 0) {
       
        console.error(errors.join('\n'));
    } else {
     
        console.log(data);
        
        fullNameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}


submitButton.addEventListener('click', validateForm);
