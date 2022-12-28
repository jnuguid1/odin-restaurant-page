const loadContact = () => {
  const content = document.querySelector('#content');
  const contactSection = document.createElement('div');
  const contactCard = document.createElement('div');
  
  contactSection.setAttribute('id', 'contact-section');
  contactCard.setAttribute('id', 'contact-card');
  contactSection.appendChild(contactCard);
  content.appendChild(contactSection);
  createInfo('Location', '99 Some Street, Some Town, Toronto, A59 0T1, Canada');
  createInfo('Contact Information', '416-213-2414');
  createInfoHours('Hours', 'Mon-Sat: 11am - 9pm', 'Sun: 12pm - 8pm');
};

const createInfo = (heading, info) => {
  const contactCard = document.querySelector('#contact-card');
  const infoHeading = document.createElement('h2');
  const infoContent = document.createElement('p');
  infoHeading.textContent = heading;
  infoContent.textContent = info;
  contactCard.appendChild(infoHeading);
  contactCard.appendChild(infoContent);
};

const createInfoHours = (heading, info1, info2) => {
  const contactCard = document.querySelector('#contact-card');
  createInfo(heading, info1);
  const infoContent = document.createElement('p');
  infoContent.textContent = info2;
  contactCard.appendChild(infoContent);
};


export default loadContact;