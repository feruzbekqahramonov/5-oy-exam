const button = document.getElementById('button')
const Email = document.getElementById('email')
const Passwordd = document.getElementById('password')
const RepeatPasswordd = document.getElementById('repeatpassword')
const errorEmail = document.getElementById('erroremail')
const inputCont = document.getElementById('inputBlock')
const errorPassword = document.getElementById('errorpassword')
const inputCont2 = document.getElementById('inputBlock2')
const errorRepassword = document.getElementById('errorrepassword')
const inputCont3 = document.getElementById('inputBlock3')
const form = document.getElementById('form')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validateRegister(email, password, repeatPassword){
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
        errorPassword.innerHTML = 'Passwordd is incorrect'
        inputCont2.style.borderBlockColor = 'red'
        Passwordd.focus()
        return false;
    } else {
        errorPassword.style.display = 'none'
        inputCont2.style.borderBlockColor = 'green'
    }

    if(repeatPassword.value.trim().length < 4) {
        errorRepassword.style.display = 'block'
        errorRepassword.innerHTML = 'Repassword not found'
        inputCont3.style.borderBlockColor = 'red'
        repeatPassword.focus()
        return false;
    } else {
        errorRepassword.style.display = 'none'
        inputCont3.style.borderBlockColor = 'green'
    }

    if(Passwordd.value != repeatPassword.value) {
        alert('Password and Repassword did not match!')
        repeatPassword.value = ''
        Passwordd.focus()
        inputCont2.style.borderBlockColor = 'red'
        return false;
    }

    let users = getData()
    if(users.length) {
        let isExist = users.some(user => {
            return user.Email == Email.value

        })

        if(isExist) {
            alert('Such an email exists')
            inputCont.style.borderBlockColor = 'red'
            Email.focus()
            return false;
        }
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
    const isValidate = validateRegister(Email, Passwordd, repeatPassword)

    if(isValidate) {
        const user = {
            Email: Email.value,
            Passwordd: Passwordd.value
        }

        let users = getData()
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        form.reset()
        let index = window.location.href.search('pages')
        let baseUrl = window.location.href.substring(0, index) 
        window.location.assign(`${baseUrl}pages/login.html`)
    }
})