const request = new XMLHttpRequest();

request.open('GET', 'https://api.openbrewerydb.org/breweries', true)

request.onload = function () {
    const data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(beer => {
            const answer = beer.name;
            console.log(answer);
            document.getElementById('beerName').innerText = answer;
        })
    } else {
        console.log('error')
    }
};

request.send();

const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'beerName');

app.appendChild(container);




