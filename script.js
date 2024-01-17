// index buttons and their color changing on hover
const contactBtn = document.querySelector('#contact-button');
contactBtn.addEventListener('mouseover', () => {
  contactBtn.style.background = '#B02851';
});
contactBtn.addEventListener('mouseout', () => {
  contactBtn.style.background = '#DE6D8F';
});

const linksBtn = document.querySelector('#links-button');
linksBtn.addEventListener('mouseover', () => {
  linksBtn.style.background = '#B02851';
});
linksBtn.addEventListener('mouseout', () => {
  linksBtn.style.background = '#846DDE';
});

const idkBtn = document.querySelector('#idk-button');
idkBtn.addEventListener('mouseover', () => {
  idkBtn.style.background = '#B02851';
});
idkBtn.addEventListener('mouseout', () => {
  idkBtn.style.background = '#6DDE84';
});

