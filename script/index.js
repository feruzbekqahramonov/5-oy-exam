const mainCard = document.getElementById('maincard')
const card = document.getElementById('card')   

// 9c445662a
// const API_URL = 'https://www.omdbapi.com?apikey=9c445662a'
// const API_KEY = '10P3G8J-ZTZ4X0C-P5208R1-HKW4PD1'
// let api = 'https://api.kinopoisk.dev'

function createCard(desc) {
    return `
    <div class="card" id="card">
        <img src="${desc.backdrop.previewUrl}" alt="image" class='img'>
        <div class="years" id="years">
            <p>${desc.year} •</p>
            <span>
                <img src="./img/movie.svg" alt="">
                <p>${desc.type}</p>
            </span>
            <p>• ${desc.ratingMpaa}</p>
        </div>
        <h4 class="name" id="name">${desc.name}</h4>
    </div>
    
  `}
  
document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault()

    fetch(`https://api.kinopoisk.dev/v1.4/movie?lists=top250`, {
        method: 'GET',
        headers: {
            'X-API-KEY': `6TN847Z-RQN4AFF-PA8JMNZ-ACTZSQ2`
            
        }
    })
        .then(res => {return res.json()})
        .then(data => {
            const item = data.docs
            item.forEach((desc) => {
                let row = createCard(desc)
                mainCard.innerHTML += row
            })
           
        })
        .catch(err => {
            console.log(err)
        })});

// const API_URL = `https://api.kinopoisk.dev/v1.4/movie/search?query=`;
// const API_KEY = `YV3P430-N3RMQQE-GFE3ZYD-HX3XC6Y`;
// const Search = document.querySelector('#input')

const Search = document.querySelector('#input') 
Search.addEventListener('keyup', (e)=> {
    e.preventDefault()
    fetch(`https://api.kinopoisk.dev/v1.4/movie/search?query=${e.target.value}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': '6TN847Z-RQN4AFF-PA8JMNZ-ACTZSQ2'
        }
        
    }).then(data => data.json())
    .then((data) => {
      mainCard.innerHTML = "";
      const docs = data.docs
      docs.forEach((desc) => {
        let card = `
            <div class="card" id="card">
            <img src="${desc.backdrop.previewUrl}" alt="image" class='img'>
            <div class="years" id="years">
                <p>${desc.year} •</p>
                <span>
                    <img src="./img/movie.svg" alt="">
                    <p>${desc.type}</p>
                </span>
                <p>• ${desc.ratingMpaa}</p>
                </div>
              <h4 class="name" id="name">${desc.name}</h4>
            </div>`;
        mainCard.innerHTML += card;
      });
    })
})   


