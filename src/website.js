import home from './home';

const loadWebsite = () => {
  const header = document.createElement('div');
  const headerTitle = document.createElement('h1');

  home();
};

export default loadWebsite;