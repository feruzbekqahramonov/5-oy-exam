const big = document.getElementById('big-container')
const loading = document.getElementById('container');
        window.addEventListener('load', function() {
            setTimeout(() => {
                loading.style.display = 'none'
                big.style.opacity = '1'
            }, 3000)
})

const darkMode = document.getElementById('dark')
const adminPanel = document.getElementById('adminpanel')
const search = document.getElementById('search')
const searchInput = document.getElementById('searchinput')
const input = document.getElementById('input')
const Menu = document.getElementById('menu')
const years = document.getElementById('years')
const name = document.getElementById('name')

darkMode && darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    if (darkMode.innerHTML == "Tun") {
        document.body.style.background = '#10141E'
        document.body.style.color = 'white'
        darkMode.style.color = 'white'
        adminPanel.style.background = '#161D2F'
        search.style.background = '#10141E'
        searchInput.style.color = 'white'
        input.style.color = 'white'
        Menu.style.color = 'white'
        years.style.color = 'white'
        name.style.color = 'white'
        darkMode.innerHTML = "Kun";
    } else {
        darkMode.innerHTML = "Tun";
        document.body.style.background = 'gray'
        document.body.style.color = '#161D2F'
        darkMode.style.color = '#161D2F'
        adminPanel.style.background = '#10141E'
        search.style.background = 'gray'
        searchInput.style.color = '#161D2F'
        input.style.color = '#161D2F'
        Menu.style.color = '#161D2F'
        years.style.color = '#161D2F'
        name.style.color = '#161D2F'
    }
    document.body.classList.toggle("tun");
});




