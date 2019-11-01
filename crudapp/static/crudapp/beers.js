const request = new XMLHttpRequest();

const cors = 'https://cors-anywhere.herokuapp.com/';
const beerAPI = 'https://sandbox-api.brewerydb.com/v2/breweries/?key=f369558d6aa24a045494dc446733fd8c'

request.open('GET', cors + beerAPI, true);

request.onload = function () {
    const data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.data.forEach(beer => {
            const beerSite = beer.website;
            const beerName = beer.name;
            console.log(beerSite);
            console.log(beerName);

            const node = document.createElement('a');
            node.setAttribute('href', beerSite);
            node.setAttribute('target', '_blank');
            node.setAttribute('class', 'yo');
            const textnode = document.createTextNode(beerName);
            node.appendChild(textnode);
            document.getElementById('beerList').appendChild(node);


        })
    } else {
        console.log('error')
    }
};

request.send();
