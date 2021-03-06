let userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (userCookie != null) {
    window.location.replace('homepage.html');
}

function unameValidate() {
    let uname = document.getElementById('username-input').value;

    if (uname.length < 5 || uname.length > 16) {
        document.getElementById('username-input').style.borderColor = 'red';
        document.getElementById('username-input').style.borderWidth = '1.5px';
        document.getElementById('false-username-msg').style.color = 'red';
        document.getElementById('false-username-msg').innerHTML = 'Username must be between 5-16 in length';
    } else if (!/^[a-zA-Z0-9_]{5,16}$/.test(uname)) {
        document.getElementById('username-input').style.borderColor = 'red';
        document.getElementById('username-input').style.borderWidth = '1.5px';
        document.getElementById('false-username-msg').style.color = 'red';
        document.getElementById('false-username-msg').innerHTML = 'Username can only be combination of characters, numbers, or underscore';
    } else {
        let getData = new FormData(document.forms.registerForm);
        let request = new XMLHttpRequest();
        request.open("POST", "php/regValidation.php", true);
        request.send(getData);

        request.onload = function() {
            switch (request.response) {
                case '401':
                    let unameInput = document.getElementById('username-input').value;
                    document.getElementById('username-input').style.borderColor = 'red';
                    document.getElementById('username-input').style.borderWidth = '1.5px';
                    document.getElementById('false-username-msg').style.color = 'red';
                    document.getElementById('false-username-msg').innerHTML = 'Username ' + unameInput + ' already exist! Please use another username.';
                    break;

                default :
                    document.getElementById('username-input').style.borderColor = 'green';
                    document.getElementById('username-input').style.borderWidth = '1.5px';
                    document.getElementById('false-username-msg').innerHTML = '';
                    break;
            }
        }
    }
}

function emailValidate() {
    let email = document.getElementById('email-input').value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('email-input').style.borderColor = 'red';
        document.getElementById('email-input').style.borderWidth = '1.5px';
        document.getElementById('false-email-msg').style.color = 'red';
        document.getElementById('false-email-msg').innerHTML = 'Please input a correct email format';
    } else {
        let getData = new FormData(document.forms.registerForm);
        let request = new XMLHttpRequest();
        request.open("POST", "php/regValidation.php", true);
        request.send(getData);

        request.onload = function() {
            switch (request.response) {
                case '402':
                    document.getElementById('email-input').style.borderColor = 'red';
                    document.getElementById('email-input').style.borderWidth = '1.5px';
                    document.getElementById('false-email-msg').style.color = 'red';
                    document.getElementById('false-email-msg').innerHTML = 'Email already exists';
                    break;

                default :
                    document.getElementById('email-input').style.borderColor = 'green';
                    document.getElementById('email-input').style.borderWidth = '1.5px';
                    document.getElementById('false-email-msg').innerHTML = '';
                    break;
            }
        }
    }
}

function phoneValidate() {
    let phone = document.getElementById('phone-input').value;

    if (phone.length < 9 || phone.length > 12) {
        document.getElementById('phone-input').style.borderColor = 'red';
        document.getElementById('phone-input').style.borderWidth = '1.5px';
        document.getElementById('false-phone-msg').style.color = 'red';
        document.getElementById('false-phone-msg').innerHTML = 'Phone number must be between 9-12 numbers';
    } else {
        let getData = new FormData(document.forms.registerForm);
        let request = new XMLHttpRequest();
        request.open("POST", "php/regValidation.php", true);
        request.send(getData);

        request.onload = function() {
            switch (request.response) {
                case '403':
                    document.getElementById('phone-input').style.borderColor = 'red';
                    document.getElementById('phone-input').style.borderWidth = '1.5px';
                    document.getElementById('false-phone-msg').style.color = 'red';
                    document.getElementById('false-phone-msg').innerHTML = 'Phone number already exists';
                    break;

                default:
                    document.getElementById('phone-input').style.borderColor = 'green';
                    document.getElementById('phone-input').style.borderWidth = '1.5px';
                    document.getElementById('false-phone-msg').innerHTML = '';
                    break;
            }
        }
    }
}

function passValidate() {
    let pass = document.getElementById('password').value;

    if (pass.length < 6 || pass.length > 16) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('password').style.borderWidth = '1.5px';
        document.getElementById('false-password-msg').style.color = 'red';
        document.getElementById('false-password-msg').innerHTML = 'Password must be between 6-12 in length';
    } else {
        document.getElementById('password').style.borderColor = '#ccc';
        document.getElementById('password').style.borderWidth = '1px';
        document.getElementById('false-password-msg').innerHTML = '';
    }

    if (document.getElementById('password').value == document.getElementById('confirm-password').value) {
        document.getElementById('confirm-password').style.borderColor = 'green';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
    else {
        document.getElementById('confirm-password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderWidth = '1.5px';
    }
}

function getFileName() {
    let filename = document.getElementById('browser-button').files[0].name;
    document.getElementById('profile-picture-name').value = filename;
}

function bankValidate() {
    let num = document.getElementById('bank-account').value;
    if (!/^\d+$/.test(num)) {
        document.getElementById('bank-account').style.borderColor = 'red';
        document.getElementById('bank-account').style.borderWidth = '1.5px';
        document.getElementById('false-bank-account-msg').style.color = 'red';
        document.getElementById('false-bank-account-msg').innerHTML = 'Account number should only contain number';
    } else {
        let getData = new FormData(document.forms.registerForm);
        let request = new XMLHttpRequest();
        request.open("POST", "php/regValidation.php", true);
        request.send(getData);

        request.onload = function() {
            switch (request.response) {
                case '404':
                    document.getElementById('bank-account').style.borderColor = 'red';
                    document.getElementById('bank-account').style.borderWidth = '1.5px';
                    document.getElementById('false-bank-account-msg').style.color = 'red';
                    document.getElementById('false-bank-account-msg').innerHTML = 'Account number already exists';
                    break;

                default :
                    document.getElementById('bank-account').style.borderColor = 'green';
                    document.getElementById('bank-account').style.borderWidth = '1.5px';
                    document.getElementById('false-bank-account-msg').innerHTML = '';
                    break;
            }
        }
    }
}

function register(e) {
    let getData = new FormData(document.forms.registerForm);
    let request = new XMLHttpRequest();
    request.open("POST", "php/register.php", true);
    request.send(getData);

    request.onload = function() {
        switch (request.response) {
            case '200':
                window.location.replace('login.html');
                break;

            case '201':
                document.getElementById('error-alert').innerHTML = 'Registration failed';
                break;

            case '301':
                document.getElementById('error-alert').innerHTML = 'Invalid username';
                break;

            case '302':
                document.getElementById('error-alert').innerHTML = 'Invalid phone number';
                break;

            case '303':
                document.getElementById('error-alert').innerHTML = 'Profile picture must not be be empty';
                break;

            case '303501':
                document.getElementById('error-alert').innerHTML = 'Profile picture must not be be empty';
                break;

            case '304':
                document.getElementById('error-alert').innerHTML = 'File must not be more than 2 MB';
                break;

            case '305':
                document.getElementById('error-alert').innerHTML = 'Invalid file type';
                break;

            case '501':
                document.getElementById('error-alert').innerHTML = 'Failed to upload profile picture';
                break;
        }
    }
    e.preventDefault();
}

document.getElementById('registerForm').addEventListener('submit', register);