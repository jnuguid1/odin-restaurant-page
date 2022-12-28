import contact from './contact';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const loadHeader = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('div');
  header.classList.add('header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = "Lola Gloria's Kusina";
  
  const nav = document.createElement('ul');
  const homeTab = document.createElement('li');
  const menuTab = document.createElement('li');
  const contactTab = document.createElement('li');
  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';
  homeTab.addEventListener('click', switchTabHome);
  menuTab.addEventListener('click', switchTabMenu);
  //contactTab.addEventListener('click', switchTabContact);
  
  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  header.appendChild(headerTitle);
  header.appendChild(nav);
  content.appendChild(header);
}

const switchTabHome = () => {
  const content = document.querySelector('#content');
  var currentTab = content.childNodes[1];
  content.removeChild(currentTab);
  loadHome();
}

const switchTabMenu = () => {
  const content = document.querySelector('#content');
  var currentTab = content.childNodes[1];
  content.removeChild(currentTab);
  loadMenu();
}

const loadWebsite = () => {
  loadHeader();
  loadHome();
};

export default loadWebsite;