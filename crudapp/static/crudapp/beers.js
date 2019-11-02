const request = new XMLHttpRequest();

const cors = 'https://cors-anywhere.herokuapp.com/';
const beerAPI = 'https://sandbox-api.brewerydb.com/v2/breweries/?key=f369558d6aa24a045494dc446733fd8c';

var counter = 0;

request.open('GET', cors + beerAPI, true);


request.onload = function () {


    const data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.data.forEach(beer => {
            const beerSite = beer.website;
            const beerName = beer.name;

            /*Beer Page*/
            counter+=1;

            console.log(beerName + " " + counter);
            console.log(beerSite + " " + counter);


            const node = document.createElement('a');
            node.setAttribute('href', beerSite);
            node.setAttribute('target', '_blank');
            node.setAttribute('class', 'yo');
            const textnode = document.createTextNode(beerName);
            node.appendChild(textnode);

            if(counter <= 6){
                document.getElementById('beerList').appendChild(node);
            } else if(counter >= 7 && counter <= 12){
                document.getElementById('beerList1').appendChild(node);
            } else {
                document.getElementById('beerList2').appendChild(node);
            }

            if(counter >= 18){
                request.send(false)
            }

        })
    } else {
        console.log('error')
    }
};

request.send();


