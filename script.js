function toggleCategory(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'flex' ? 'none' : 'flex';
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


function randomizeOutfit() {
  const topOptions = ['tops/top1.png', 'tops/top2.png'];
  const bottomOptions = ['bottoms/bottom1.png', 'bottoms/bottom2.png'];
  const shoesOptions = ['shoes/shoes1.png'];

  const random = arr => arr[Math.floor(Math.random() * arr.length)];

  selectClothing('top', random(topOptions));
  selectClothing('bottom', random(bottomOptions));
  selectClothing('shoes', random(shoesOptions));
}
