export const isScrollOnBottom = (): boolean => {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
};
