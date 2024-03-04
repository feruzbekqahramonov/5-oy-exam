const big = document.getElementById('big-container')
const dark = document.getElementById('dark')
const block = document.getElementById('block')
const signIn = document.getElementById('signin')
const email = document.getElementById('email')
const inputBlock = document.getElementById('inputBlock')
const password = document.getElementById('password')
const inputBlock2 = document.getElementById('inputBlock2')
const linklogin = document.getElementById('linklogin')

dark && dark.addEventListener("click", (e) => {
    e.preventDefault();
    if (dark.innerHTML == "Tun") {
        document.body.style.background = '#10141E'
        document.body.style.color = 'white'
        block.style.background = '#161D2F' 
        signIn.style.color = '#fff'
        dark.style.color = 'white'
        dark.innerHTML = "Kun";
        email.style.color = 'white'
        inputBlock.style.borderBlockColor = 'white'
        password.style.color = 'white'
        inputBlock2.style.borderBlockColor = 'white'
        linklogin.style.color = 'white'
    } else {
        document.body.style.background = 'lightgray'
        document.body.style.color = '#161D2F'
        block.style.backgroundColor = 'white'
        dark.innerHTML = "Tun";
        dark.style.color = '#161D2F'
        block.style.background = 'white'
        signIn.style.color = '#161D2F'
        email.style.color = '#161D2F'
        inputBlock.style.borderBlockColor = '#161D2F'
        password.style.color = '#161D2F'
        inputBlock2.style.borderBlockColor = '#161D2F'
        linklogin.style.color = '#161D2F'
    }
    document.body.classList.toggle("tun");
});
const loading = document.getElementById('container')
        window.addEventListener('load', function() {
            setTimeout(() => {
                loading.style.display = 'none'
                big.style.display = 'block'
                big.style.opacity = '1'
            }, 3000)
})

