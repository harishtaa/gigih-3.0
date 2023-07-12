const submitButton = document.querySelector('.btn-submit');

submitButton.addEventListener('click', function() {
    verify(VerifyEmail, VerifyPassword);
});

function verify(VerifyEmail, VerifyPassword){
    const inputEmail = document.getElementById('input-email').value;
    const inputPassword = document.getElementById('input-password').value;
    if(inputEmail !== '' && inputPassword !== '' ){
        let email= VerifyEmail(inputEmail);
        let password = VerifyPassword(inputPassword);
        if(email===true && password ===true){
            alert('Login Success');
        };
    }else{
        alert('Both fields must be filled! ');
    };
};

function VerifyEmail(email){
    const alertEmail = document.querySelector('.email-alert');
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailFormat)){
        alertEmail.innerHTML='';
        return true;
    }else{
        const alertEmail = document.querySelector('.email-alert');
        alertEmail.innerHTML='Format email salah!';
    };
};

function VerifyPassword(password){
    const alertPassword = document.querySelector('.password-alert');
    let numPassword = /[0-9]/g;
    if(password.length>=6){
        if (password.match(numPassword)){
            alertPassword.innerHTML='';
            return true;
        }else{
            alertPassword.innerHTML='Password harus berisi angka';
        }
    }else{
        alertPassword.innerHTML='password kurang dari 6 karakter!';
    };
};