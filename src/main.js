const coverImage = document.querySelector('.cover-image');
const coverTitle = document.querySelector('.cover-title');
const tagline1 = document.querySelector('.tagline-1');
const tagline2 = document.querySelector('.tagline-2');

const homeView = document.querySelector('.home-view');
const savedView = document.querySelector('.saved-view');
const formView = document.querySelector('.form-view');
const savedSection = document.querySelector('.saved-covers-section');

const homeBtn = document.querySelector('.home-button');
const randomCoverBtn = document.querySelector('.random-cover-button');
const saveCoverBtn = document.querySelector('.save-cover-button');
const viewSavedBtn = document.querySelector('.view-saved-button');
const makeNewCoverBtn = document.querySelector('.make-new-button');

const coverImageField = document.getElementById('cover');
const coverTitleField = document.getElementById('title');
const descriptor1Field = document.getElementById('descriptor1');
const descriptor2Field = document.getElementById('descriptor2');

const createBookBtn = document.querySelector('.create-new-book-button');

let currentCover;

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
randomCoverBtn.addEventListener('click', randomizeCover);
saveCoverBtn.addEventListener('click', saveCover);
viewSavedBtn.addEventListener('click', showSaved);
makeNewCoverBtn.addEventListener('click', showForm);
createBookBtn.addEventListener('click', createBook);

function randomizeCover() {
  let randomCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );

  currentCover = randomCover;

  coverImage.src = randomCover.cover;
  coverTitle.innerText = randomCover.title;
  tagline1.innerText = randomCover.tagline1;
  tagline2.innerText = randomCover.tagline2;
}

function showHome() {
  homeBtn.classList.add('hidden');
  randomCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
  makeNewCoverBtn.classList.remove('hidden');
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  formView.classList.add('hidden');
}

function showSaved() {
  homeBtn.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');

  savedSection.innerHTML = "";

  displaySavedCovers();
}

function displaySavedCovers() {
  for (let i = 0; i < savedCovers.length; i++) {
    savedSection.insertAdjacentHTML('beforeend', `
      <button class="mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image mini-cover" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </button>
    `);

    deleteOnDblClick(savedCovers[i]);
  }
}

function deleteOnDblClick(savedCover) {
  let currentCoverBtn = document.getElementById(savedCover.id.toString());
  currentCoverBtn.addEventListener('dblclick', function() {

    for (let i = 0; i < savedCovers.length; i++) {
      new function(savedCoverID, savedCoverTitle, savedCoverTagline1, savedCoverTagline2) {
      if (savedCovers[i].id === savedCoverID && covers[i] === savedCoverImage && titles[i] === savedCoverTitle && edescriptors[i] === savedCoverTagline1 && descriptors[i + 1] === savedCoverTagline2) {
        return savedCovers.splice(i, 1);
      }
    }
     }
    // removeSavedCover(savedCover.id);
    // removeSavedCoverImage(savedCover.cover);
    // removeSavedTitle(savedCover.title);
    // removeSavedDescriptors(savedCover.tagline1, savedCover.tagline2);
    savedSection.removeChild(currentCoverBtn);
  });
}

// function removeSavedCover(savedCoverID) {
//   for (let i = 0; i < savedCovers.length; i++) {
//     if (savedCovers[i].id === savedCoverID) {
//       return savedCovers.splice(i, 1);
//     }
//   }
// }

// function removeSavedCoverImage(savedCoverImage) {
//   for (let i = 0; i < covers.length; i++) {
//     if (covers[i] === savedCoverImage) {
//       return covers.splice(i, 1);
//     }
//   }
// }

// function removeSavedTitle(savedCoverTitle) {
//   for (let i = 0; i < titles.length; i++) {
//     if (titles[i] === savedCoverTitle) {
//       titles.splice(i, 1);
//     }
//   }
// }

// function removeSavedDescriptors(savedCoverTagline1, savedCoverTagline2) {
//   for (let i = 0; i < descriptors.length; i++) {
//     if (descriptors[i] === savedCoverTagline1 && descriptors[i + 1] === savedCoverTagline2) {
//       descriptors.splice(i, 1);
//     }
//   }
// }

function showForm() {
  homeBtn.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.remove('hidden');
}

function createBook(e) {
  e.preventDefault();

  covers.push(coverImageField.value);
  titles.push(coverTitleField.value);
  descriptors.push(descriptor1Field.value);
  descriptors.push(descriptor2Field.value);

  replaceCurrentCoverWithCustom();
  showHome();
}

function replaceCurrentCoverWithCustom() {
  const customBook = new Cover(
    coverImageField.value,
    coverTitleField.value,
    descriptor1Field.value,
    descriptor2Field.value
  );

  currentCover = customBook;

  coverImage.src = customBook.cover;
  coverTitle.innerText = customBook.title;
  tagline1.innerText = customBook.tagline1;
  tagline2.innerText = customBook.tagline2;
}

function saveCover() {
  for (let i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      return;
    }
  }

  savedCovers.push(currentCover);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
