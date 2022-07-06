import './style.css';

const main = document.querySelector('main');

const article = document.createElement('article');

if (main) {
  main.append(article);
}

const ulEl = document.createElement('ul');
ulEl.className = 'breweries-list';

article.append(ulEl);

const liEl = document.createElement('li');
ulEl.append(liEl);

const h2El = document.createElement('h2');
h2El.textContent = 'Snow Belt Brew'
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
p.textContent = '9511 Kile Rd'
const pp = document.createElement('p');

sectionEl.append(h3, p, pp)
liEl.appendChild(sectionEl);
