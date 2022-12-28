import loadHome from './home';
import loadHeader from './header';
import loadFooter from './footer';

const loadWebsite = () => {
  loadHeader();
  loadHome();
  loadFooter();
};

export default loadWebsite;