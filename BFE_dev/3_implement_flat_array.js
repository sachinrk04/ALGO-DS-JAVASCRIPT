function flat(arr, depth = 1) {
    let flattenArray = [];
    function flatten(array, dp) {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && dp > 0) {
            flatten(array[i], dp - 1);
        } else {
            flattenArray.push(array[i])
        }
      }
    }
    flatten(arr, depth);
    return flattenArray;
}

const arr = [1, [2], [3, [4]]];
console.log(flat(arr));