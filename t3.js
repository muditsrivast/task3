function merge_Arrays(left_sub_array, right_sub_array) {
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}
function merge_sort(unsorted_Array) {
  const middle_index = unsorted_Array.length / 2;
  if (unsorted_Array.length < 2) {
    return unsorted_Array;
  }
  const left_sub_array = unsorted_Array.splice(0, middle_index);
  return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
}
const unsorted_Array1 = [11, 23, 56, 97, 32, 40, 72, 65, 88, 56, 32, 79, 72];
const unsorted_Array2 = [11, 23, 56, 97, 32, 40, 72, 65, 88, 56, 32, 79, 72];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
// if(removeDuplicates(unsorted_Array)[0]) console.log(removeDuplicates(unsorted_Array));
// else console.log(unsorted_Array);
// console.log(unsorted_Array);

const uniqueElements = removeDuplicates(unsorted_Array2);
document.write("The sorted array will be: ", merge_sort(unsorted_Array1));

document.write(
  "The sorted array after removing duplicate elements will be: ",
  merge_sort(uniqueElements)
);
