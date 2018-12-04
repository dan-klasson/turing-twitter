
middleware.CHANGE_THEME = (store) => (next) => (action) => {
  if (action.type === 'CHANGE_THEME') {
    if (localStorage.getItem('theme') !== action.payload) {
      localStorage.setItem('theme', action.payload);
    }
  }
  return next(action);
}