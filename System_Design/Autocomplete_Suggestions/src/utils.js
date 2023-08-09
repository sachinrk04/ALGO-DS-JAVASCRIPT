import { FRUITS } from "./data.js";

export const getSuggestions = async (keyword) => {
  const result = FRUITS.filter(
    (i) => i.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );

  return new Promise((res) => {
    setTimeout(() => res(result), 1000);
  });
};

export const debounce = (fn, delay = 500) => {
  let timeId;
  return function () {
    const self = this;
    const args = arguments;
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
};
