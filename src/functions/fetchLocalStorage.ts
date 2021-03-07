
export const fetchLocalStorage = ():boolean => {
  return !!localStorage.getItem('githubUserName');
}
