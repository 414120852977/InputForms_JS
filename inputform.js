
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
        