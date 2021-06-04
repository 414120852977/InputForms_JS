
 //UC-1 validation for name
        const text = document.querySelector('#text');
        const textError = document.querySelector('.text-error');
        text.addEventListener('input', function() {
            //name should be start with cap and has minimum 3 characters
            let nameRegex = RegExp('[A-Z]{1}[a-zA-Z]{2,}$');
            if(nameRegex.test(text.value))
                textError.textContent = "";
                //print name is incorrect if regex test is failed
            else textError.textContent = "Name is Incorrect";
        });
         //UC-2 Validation for email
        const email = document.querySelector('#email');                     
        const emailError = document.querySelector('.email-error');
        email.addEventListener('input',function() {
            //enter a valid email - E.g. abc.xyz@bl.co.in email validation 
            let emailRegex = RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');  
            if(emailRegex.test(email.value))
                emailError.textContent = "";
            else
            //print error message if regex test is failed
                emailError.textContent = "Email is Incorrect";              
        });

//UC-3 Validation for mobile number
        const tel = document.querySelector('#tel');                             
        const telError = document.querySelector('.tel-error');
        tel.addEventListener('input',function() {
            //Country code follow by space and 10 digit number
            let telRegex = RegExp('^[0-9]{2}[ ][6-9]{1}[0-9]{9}$');              
            if(telRegex.test(tel.value))
                telError.textContent = "";
            else
            //print error message if regex test is failed
                telError.textContent = "Contact number is Incorrect";              
        });