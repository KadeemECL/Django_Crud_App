const request = new XMLHttpRequest();

request.open('GET', 'https://api.openbrewerydb.org/breweries', true);

request.onload = function () {
    const data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.forEach(beer => {
            const answer = beer.website_url;
            console.log(answer);

            const node = document.createElement('a');
            node.setAttribute('href', answer);
            node.setAttribute('target', '_blank');
            node.setAttribute('class', 'yo');
            const textnode = document.createTextNode(answer);
            node.appendChild(textnode);
            document.getElementById('beerList').appendChild(node);


        })
    } else {
        console.log('error')
    }
};

request.send();
