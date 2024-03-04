const button = document.getElementById('button')
const Email = document.getElementById('email')
const Passwordd = document.getElementById('password')
const errorEmail = document.getElementById('erroremail')
const inputCont = document.getElementById('inputBlock')
const errorPassword = document.getElementById('errorpassword')
const inputCont2 = document.getElementById('inputBlock2')
const form = document.getElementById('form')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validateLogin(Email, Password){
    if(Email.value.trim().length < 3) {
        errorEmail.style.display = 'block'
        errorEmail.innerHTML = 'Email is incorrect'
        inputCont.style.borderBlockColor = 'red'
        Email.focus()
        return false;
    } else {
        errorEmail.style.display = 'none'
        inputCont.style.borderBlockColor = 'green'
    }

    if(!validateEmail(Email.value)){
        errorEmail.style.display = 'block'
        errorEmail.innerHTML = 'Email is not'
        inputCont.style.borderBlockColor = 'red'
        Email.focus()
        return false;
    } else {
        errorEmail.style.display = 'none'
        inputCont.style.borderBlockColor = 'green'
    }

    if(Passwordd.value.trim().length < 4) {
        errorPassword.style.display = 'block'
        errorPassword.innerHTML = 'Password is incorrect'
        inputCont2.style.borderBlockColor = 'red'
        Passwordd.focus()
        return false;
    } else {
        errorPassword.style.display = 'none'
        inputCont2.style.borderBlockColor = 'green'
    }

    return true;
}

function getData() {
    let data = []
    if(localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    }
    return data;
}


button && button.addEventListener('click', function(e) {
    e.preventDefault()
    const isValidate = validateLogin(Email, Passwordd)

    if(isValidate) {
        let users = getData()
        let user = users.find((el) => {
            return el.Email == Email.value && el.Passwordd == Passwordd.value
        })

        if(user?.Email) {
            let fullUrl = window.location.href;
            console.log(fullUrl);
            let index = fullUrl.search('ppages')
            let baseUrl = fullUrl.substring(0, index)
            window.location.assign(`${baseUrl}/index.html`)
        } else {
            alert('Password or email was entered incorrectly')
            inputCont2.style.borderBlockColor = 'white'
            inputCont.style.borderBlockColor = 'white'
        }
    }
})