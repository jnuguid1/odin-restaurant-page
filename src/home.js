import './index.css';
import ChefImage from './images/lola.jpg';

const loadHome = () => {
  const content = document.querySelector('#content');
  const homeSection = document.createElement('div');
  const homeCard = document.createElement('div');
  const restaurantDesc = document.createElement('h2');
  const chefImageCaption = document.createElement('p');
  const chefImage = new Image(180, 220);
  chefImage.src = ChefImage;

  homeSection.classList.add('home-section');
  homeCard.classList.add('home-card');

  restaurantDesc.textContent = 'Delicious and authentic Filipino food in Toronto';
  chefImageCaption.textContent = 'Made with love by Lola Gloria';
  
  homeCard.appendChild(restaurantDesc);
  homeCard.appendChild(chefImage);
  homeCard.appendChild(chefImageCaption);
  homeSection.appendChild(homeCard);
  content.appendChild(homeSection);
};

export default loadHome;