export const sanitizeHTML = (string: string, markup = 'span', style = '') => {
  const element = document.createElement(markup);
  element.textContent = string;
  element.setAttribute('style', style);

  return element.innerHTML;
};
