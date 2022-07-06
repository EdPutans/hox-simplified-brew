import './style.css';

type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string | null;
  address_2: null;
  address_3: null;
  city: string;
  state: string;
  county_province: null;
  postal_code: string;
  country: string;
  longitude: unknown;
  latitude: unknown;
  phone: string | null;
  website_url: string | null;
  created_at: string;
  updated_at: string;
}

const testBreweries: Array<Brewery> = [
  {
    "id": "banjo-brewing-fayetteville",
    "name": "Banjo Brewing",
    "brewery_type": "planning",
    "street": null,
    "address_2": null,
    "address_3": null,
    "city": "Fayetteville",
    "state": "West Virginia",
    "county_province": null,
    "postal_code": "25840",
    "country": "United States",
    "longitude": null,
    "latitude": null,
    "phone": "3042164231",
    "website_url": null,
    "updated_at": "2021-10-23T02:24:55.243Z",
    "created_at": "2021-10-23T02:24:55.243Z"
  },
  {
    "id": "barrel-brothers-brewing-company-windsor",
    "name": "Barrel Brothers Brewing Company",
    "brewery_type": "micro",
    "street": "399 Business Park Ct Ste 506",
    "address_2": null,
    "address_3": null,
    "city": "Windsor",
    "state": "California",
    "county_province": null,
    "postal_code": "95492-6652",
    "country": "United States",
    "longitude": null,
    "latitude": null,
    "phone": "7076969487",
    "website_url": "http://www.barrelbrothersbrewing.com",
    "updated_at": "2021-10-23T02:24:55.243Z",
    "created_at": "2021-10-23T02:24:55.243Z"
  },
  {
    "id": "bay-brewing-company-miami",
    "name": "Bay Brewing Company",
    "brewery_type": "planning",
    "street": null,
    "address_2": null,
    "address_3": null,
    "city": "Miami",
    "state": "Florida",
    "county_province": null,
    "postal_code": "33130-3488",
    "country": "United States",
    "longitude": null,
    "latitude": null,
    "phone": "18134763767",
    "website_url": null,
    "updated_at": "2021-10-23T02:24:55.243Z",
    "created_at": "2021-10-23T02:24:55.243Z"
  }
]



const main = document.querySelector('main');

const article = document.createElement('article');

const rawHTML = `
  <h1>List of Breweries</h1>
  <header class="search-bar">
    <form id="search-breweries-form" autocomplete="off">
      <label id='banana' for="search-breweries"><h2>Search breweries:</h2></label>
      <input id="search-breweries" name="search-breweries" type="text" />
    </form>
  </header>
`;

main.innerHTML = rawHTML;

if (main) {
  main.append(article);
}

for (let brewery of testBreweries) {
  renderSingleBrewery(brewery)
}

function renderSingleBrewery(brewery: Brewery) {
  const ulEl = document.createElement('ul');
  ulEl.className = 'breweries-list';

  article.append(ulEl);

  const liEl = document.createElement('li');
  ulEl.append(liEl);

  const h2El = document.createElement('h2');
  h2El.textContent = brewery.name;
  liEl.append(h2El);

  const divEl = document.createElement('div');
  divEl.className = 'type';
  divEl.textContent = 'micro'
  liEl.appendChild(divEl);

  const sectionEl = document.createElement('section');
  sectionEl.className = 'address';

  const h3 = document.createElement('h3');
  h3.textContent = 'Address:'
  const p = document.createElement('p');
  p.textContent = brewery.street || "No address for this boi"
  const pp = document.createElement('p');

  sectionEl.append(h3, p, pp)
  liEl.appendChild(sectionEl);
}