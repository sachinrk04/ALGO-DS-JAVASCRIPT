import { getSuggestions, debounce } from "./utils.js";

const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestion-wrapper");

const resetState = () => {
  suggestionBox.classList.remove("suggestion-visible");
};

const renderDropItem = (lists = []) => {
  const suggFragment = document.createDocumentFragment();

  lists.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    el.setAttribute("data-key", item);
    suggFragment.appendChild(el);
  });
  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFragment);
};

const handleSearch = async (keyword) => {
  const result = await getSuggestions(keyword);
  if (result.length) {
    suggestionBox.classList.add("suggestion-visible");
    renderDropItem(result);
  }
};

const handleInputChange = (event) => {
  const value = event.target.value;
  if (value) {
    handleSearch(value);
  } else {
    resetState();
  }
};

const handleSelect = (event) => {
    const { key } = event.target.dataset;
    console.log("key---->", key)
    if (key) {
        inputBox.value = key;
        resetState();
    }
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 1000));
  suggestionBox.addEventListener("click", handleSelect);
})();

