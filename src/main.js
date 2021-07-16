let cover = document.querySelector('.cover-image');
let title = document.querySelector('.cover-title');
let tagline1 = document.querySelector('.tagline-1');
let tagline2 = document.querySelector('.tagline-2');

let randCoversIndex = getRandIndex(covers);
let randTitlesIndex = getRandIndex(titles);
let randDescriptorIndex1 = getRandIndex(descriptors);
let randDescriptorIndex2 = getRandIndex(descriptors);

let homeView = document.querySelector('.home-view');
let savedView = document.querySelector('.saved-view');
let makeView = document.querySelector('.form-view');

let homeViewBtn = document.querySelector('.home-button');
let randBtn = document.querySelector('.random-cover-button');
let saveBtn = document.querySelector('.save-cover-button');
let savedViewBtn = document.querySelector('.view-saved-button');
let makeViewBtn = document.querySelector('.make-new-button');

let coverField = document.getElementById('cover');
let titleField = document.getElementById('title');
let descriptor1Field = document.getElementById('descriptor1');
let descriptor2Field = document.getElementById('descriptor2');
let createBookBtn = document.querySelector('.create-new-book-button');

const savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

homeViewBtn.addEventListener('click', showHomeView);
randBtn.addEventListener('click', changeCover);
// saveBtn
savedViewBtn.addEventListener('click', showSavedView);
makeViewBtn.addEventListener('click', showMakeView);
createBookBtn.addEventListener('click', createBook);

function changeCover() {
  newCover = new Cover(covers[getRandIndex(covers)], titles[getRandIndex(titles)], descriptors[getRandIndex(descriptors)], descriptors[getRandIndex(descriptors)]);
  cover.src = newCover.cover;
  title.innerText = newCover.title;
  tagline1.innerText = newCover.tagline1;
  tagline2.innerText = newCover.tagline2;
}

changeCover();

function showHomeView() {
  homeViewBtn.classList.add('hidden');
  randBtn.classList.remove('hidden');
  saveBtn.classList.remove('hidden');
  makeViewBtn.classList.remove('hidden');
  homeView.classList.remove('hidden');
}

function showSavedView() {
  homeViewBtn.classList.remove('hidden');
  randBtn.classList.add('hidden');
  saveBtn.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  makeView.classList.add('hidden');
}

function showMakeView() {
  homeViewBtn.classList.remove('hidden');
  randBtn.classList.add('hidden');
  saveBtn.classList.add('hidden');
  homeView.classList.add('hidden');
  makeView.classList.remove('hidden');
}

function createBook() {
  console.log(covers, titles, descriptors)
  console.log('before', coverField.value)
  covers.push(coverField.value);
  titles.push(titleField.value);
  descriptors.push(descriptor1Field.value, descriptor2Field.value);
  console.log(covers, titles, descriptors)
  console.log('after', coverField.value)

  customBook = new Cover(coverField.value, titleField.value, descriptor1Field.value, descriptor2Field.value);
  cover.src = customBook.cover;
  title.innerText = customBook.title;
  tagline1.innerText = customBook.tagline1;
  tagline2.innerText = customBook.tagline2;
}

function getRandIndex(array) {
  return Math.floor(Math.random() * array.length);
}
