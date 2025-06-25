function toggleCategory(category) {
  const section = document.getElementById(category);
  section.classList.toggle("active");
}



function selectClothing(type, imagePath) {
  const sound = document.getElementById('click-sound');
  sound.currentTime = 0;
  sound.play();

  const layers = {
    top: 'top-layer',
    bottom: 'bottom-layer',
    shoes: 'shoes-layer'
  };

  const element = document.getElementById(layers[type]);
  element.src = imagePath;
  element.classList.remove('show');
  void element.offsetWidth;
  element.classList.add('show');
}

function removeClothing(type) {
  const layers = {
    top: 'top-layer',
    bottom: 'bottom-layer',
    shoes: 'shoes-layer'
  };
  document.getElementById(layers[type]).src = '';
  document.getElementById(layers[type]).classList.remove('show');
}


function getRandomClothing(folder) {
  const count = 9; 
  const randomIndex = Math.floor(Math.random() * count) + 1;
  return `${folder}/${folder.slice(0, -1)}${randomIndex}.png`;
}

function randomizeOutfit() {
  const top = getRandomClothing("tops");
  const bottom = getRandomClothing("bottoms");

  selectClothing('top', top);
  selectClothing('bottom', bottom);
}

