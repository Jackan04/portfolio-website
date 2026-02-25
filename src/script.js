function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export { getCurrentYear, capitalize };
