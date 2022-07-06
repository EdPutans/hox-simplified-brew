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

let state: Array<Brewery> = []
let usStateName = '';

function render() {
  console.log({ state })
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
  // see ya later!


  main.innerHTML += rawHTML;

  if (main) {
    main.append(article);
  }

  const nameInputForm = document.querySelector<HTMLFormElement>('#search-breweries-form');

  console.log({ nameInputForm })
  nameInputForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const brewName = nameInputForm['search-breweries'].value;

    getBrewsLee(brewName)
  })


  for (let brewery of state) {
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
}

function getBrewsLee(byName: string = ""): void {
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${usStateName}&per_page=20&by_name=${byName}`)
    .then(r => r.json())
    .then(brews => {
      state = brews;
      render();
    })
}

let inputElState = document.querySelector('#select-state-form');
inputElState?.addEventListener('submit', (event) => {
  event.preventDefault()
  const value = inputElState['select-state'].value
  usStateName = value;
  getBrewsLee();
})