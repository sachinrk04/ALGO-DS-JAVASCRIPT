function debounce(func, delay) {
    let timeoutId;
    
    return function() {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
}


function validateInput(e) {
    fetch(`https://jsonplaceholder.typicode.com/comments?name=${e}`)
        .then(res => res.json())
        .then(data => console.log(data));
}

const debouncedValidation = debounce(validateInput, 500);
