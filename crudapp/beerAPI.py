import requests
import pprint

r = requests.get('https://api.openbrewerydb.org/breweries')
#pprint.pprint(r.json()[0])
#txt = r.json()[0]

url = 'https://api.openbrewerydb.org/breweries'

while True:
    response = requests.get(url)
    data = response.text
    names = r.json()

    for name in names['name']:
        print(name['name'])