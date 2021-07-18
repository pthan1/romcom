let cover = document.querySelector('.cover-image');
let title = document.querySelector('.cover-title');
let tagline1 = document.querySelector('.tagline-1');
let tagline2 = document.querySelector('.tagline-2');

let homeView = document.querySelector('.home-view');
let savedView = document.querySelector('.saved-view');
let makeView = document.querySelector('.form-view');
let savedSection = document.querySelector('.saved-covers-section');

let homeBtn = document.querySelector('.home-button');
let randBtn = document.querySelector('.random-cover-button');
let saveBtn = document.querySelector('.save-cover-button');
let viewSavedBtn = document.querySelector('.view-saved-button');
let makeBtn = document.querySelector('.make-new-button');

let coverField = document.getElementById('cover');
let titleField = document.getElementById('title');
let descriptor1Field = document.getElementById('descriptor1');
let descriptor2Field = document.getElementById('descriptor2');

let createBookBtn = document.querySelector('.create-new-book-button');

let curCover;

const savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", 
    "Sunsets and Sorrows", 
    "sunsets", 
    "sorrows"
  )
];

window.addEventListener('load', randomizeCover);

homeBtn.addEventListener('click', showHome);
randBtn.addEventListener('click', randomizeCover);
saveBtn.addEventListener('click', saveCover);
viewSavedBtn.addEventListener('click', showSaved);
makeBtn.addEventListener('click', showMake);

createBookBtn.addEventListener('click', createBook);

function randomizeCover() {
  let randCover = new Cover(
    covers[getRandIndex(covers)],
    titles[getRandIndex(titles)], 
    descriptors[getRandIndex(descriptors)], 
    descriptors[getRandIndex(descriptors)]
  );

  curCover = randCover;

  cover.src = randCover.cover;
  title.innerText = randCover.title;
  tagline1.innerText = randCover.tagline1;
  tagline2.innerText = randCover.tagline2;
}

function showHome() {
  homeBtn.classList.add('hidden');
  randBtn.classList.remove('hidden');
  saveBtn.classList.remove('hidden');
  makeBtn.classList.remove('hidden');
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  makeView.classList.add('hidden');
}

function showSaved() {
  homeBtn.classList.remove('hidden');
  randBtn.classList.add('hidden');
  saveBtn.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  makeView.classList.add('hidden');

  savedSection.innerHTML = "";

  for (let i = 0; i < savedCovers.length; i++) {
    savedSection.insertAdjacentHTML('beforeend', `
      <button class="mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image mini-cover" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">$         {savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </button>
    `);

    let curCoverBtn = document.getElementById(savedCovers[i].id);
    
    curCoverBtn.addEventListener('dblclick', function() {
      savedSection.removeChild(curCoverBtn);
    });
  }
}

function showMake() {
  homeBtn.classList.remove('hidden');
  randBtn.classList.add('hidden');
  saveBtn.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  makeView.classList.remove('hidden');
}

function createBook() {
  event.preventDefault();

  covers.push(coverField.value);
  titles.push(titleField.value);
  descriptors.push(descriptor1Field.value);
  descriptors.push(descriptor2Field.value);

  let customBook = new Cover(
    coverField.value,
    titleField.value,
    descriptor1Field.value,
    descriptor2Field.value
  );

  curCover = customBook;

  cover.src = customBook.cover;
  title.innerText = customBook.title;
  tagline1.innerText = customBook.tagline1;
  tagline2.innerText = customBook.tagline2;

  showHome();
}

function saveCover() {
  for (let i = 0; i < savedCovers.length; i++) {
    if (curCover.id === savedCovers[i].id) {
      return;
    }
  }
  
  savedCovers.push(curCover);
}

function getRandIndex(array) {
  return Math.floor(Math.random() * array.length);
}
