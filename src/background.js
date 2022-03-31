const images = [
  'bg1.jpg',
  'bg2.jpg',
  'bg3.jpg',
  'bg4.jpg',
  'bg5.jpg',
  'bg6.jpg',
  'bg7.jpg'
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `assets/${randomImage}`;

document.body.appendChild(bgImage);
