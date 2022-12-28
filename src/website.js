import loadHome from './home';

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
  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  header.appendChild(headerTitle);
  header.appendChild(nav);
  content.appendChild(header);
}

const loadWebsite = () => {
  loadHeader();
  loadHome();
};

export default loadWebsite;