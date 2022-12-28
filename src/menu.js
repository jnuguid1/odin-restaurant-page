import Sinigang from './images/sinigang.jpeg';
import Adobo from './images/chicken-adobo.jpg';
import HaloHalo from './images/halo-halo.jpg';
import Palabok from './images/palabok.jpg';
import Sisig from './images/sisig.jpeg';
import Pacnit from './images/pancit.jpg';

const loadMenu = () => {
  const content = document.querySelector('#content');
  const menuSection = document.createElement('div');
  const menuGrid = document.createElement('div');

  menuSection.setAttribute('id', 'menu-section');
  menuGrid.setAttribute('id', 'menu-grid');
  menuSection.appendChild(menuGrid);
  content.appendChild(menuSection);
  createCard('Chicken Adobo', Adobo);
  createCard('Pork Sinigang', Sinigang);
  createCard('Palabok Special', Palabok);
  createCard('Halo-Halo', HaloHalo);
  createCard('Pancit', Pacnit);
  createCard('Sisig', Sisig);
};

const createCard = (dish, image) => {
  const menuGrid = document.querySelector('#menu-grid');
  const foodCard = document.createElement('div');
  const foodName = document.createElement('h2');
  const foodImage = new Image(280, 200);

  foodCard.classList.add('food-card');
  foodName.textContent = dish;
  foodImage.src = image;
  foodCard.appendChild(foodName);
  foodCard.appendChild(foodImage);
  menuGrid.appendChild(foodCard);
}

export default loadMenu;