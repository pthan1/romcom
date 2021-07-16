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

let randCoverBtn = document.querySelector('.rand-cover-button');
randCoverBtn.addEventListener('click', changeCover);

let makeNewCoverBtn = document.querySelector('.make-new-button');
makeNewCoverBtn.addEventListener('click', showNewCoverForm);

function changeCover() {
  newCover = new Cover(covers[getRandIndex(covers)], titles[getRandIndex(titles)], descriptors[getRandIndex(descriptors)], descriptors[getRandIndex(descriptors)]);
  cover.src = newCover.cover;
  title.innerText = newCover.title;
  tagline1.innerText = newCover.tagline1;
  tagline2.innerText = newCover.tagline2;
}

changeCover();

function showNewCoverForm() {

}

function getRandIndex(array) {
  return Math.floor(Math.random() * array.length);
}
