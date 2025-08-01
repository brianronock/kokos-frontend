// src/utils/scrollToElement.js
export function scrollToElement(refOrId, behavior = 'auto') {
  const element = typeof refOrId === 'string' ? document.getElementById(refOrId) : refOrId.current;
  if (element) {
    const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
    const custOffset = 60; // We can always change this..
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight + custOffset;
    window.scrollTo({ top, behavior });
  } else {
    console.error(`Element not found: ${refOrId}`);
  }
}