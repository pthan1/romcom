let cover = document.querySelector('.cover-image');
let title = document.querySelector('.cover-title');
let tagline1 = document.querySelector('.tagline-1');
let tagline2 = document.querySelector('.tagline-2');
let randCoversIndex = getRandIndex(covers);
let randTitlesIndex = getRandIndex(titles);
let randDescriptorIndex1 = getRandIndex(descriptors);
let randDescriptorIndex2 = getRandIndex(descriptors);
const savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
let homeView = document.querySelector('.home-view');
let formView = document.querySelector('.form-view');
let randCoverBtn = document.querySelector('.random-cover-button');
let saveCoverBtn = document.querySelector('.save-cover-button');
let homeBtn = document.querySelector('.home-button');
let savedViewBtn = document.querySelector('.view-saved-button');
let savedView = document.querySelector('.saved-view');
let makeNewCoverBtn = document.querySelector('.make-new-button');

randCoverBtn.addEventListener('click', changeCover);

makeNewCoverBtn.addEventListener('click', showNewCoverForm);

savedViewBtn.addEventListener('click', showSavedView);

function changeCover() {
  newCover = new Cover(covers[getRandIndex(covers)], titles[getRandIndex(titles)], descriptors[getRandIndex(descriptors)], descriptors[getRandIndex(descriptors)]);
  cover.src = newCover.cover;
  title.innerText = newCover.title;
  tagline1.innerText = newCover.tagline1;
  tagline2.innerText = newCover.tagline2;
}

changeCover();

function showNewCoverForm() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}

function showSavedView() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');

}

function getRandIndex(array) {
  return Math.floor(Math.random() * array.length);
}
