const loadFooter = () => {
  const content = document.querySelector('#content');
  const footerSection = document.createElement('div');
  const footerText = document.createElement('h2');

  footerSection.setAttribute('id', 'footer-section');
  footerText.textContent = 'Create by Jared Nuguid';
  footerSection.appendChild(footerText);
  content.appendChild(footerSection);
}

export default loadFooter;