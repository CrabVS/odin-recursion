const merge = function merge(arr1, arr2) {
    let newArray = [];

    while (arr1.length + arr2.length !== 0) {
        if (arr2.length === 0 || arr1[0] < arr2[0]) {
            newArray.push(arr1.shift());
        } else {
            newArray.push(arr2.shift());
        }
    }

    return newArray;
};

const mergeSort = function mergeSort(unsortedArr) {
    if (unsortedArr.length <= 1) return unsortedArr;

    return merge(
        mergeSort(unsortedArr.slice(0, (unsortedArr.length / 2))), 
        mergeSort(unsortedArr.slice(unsortedArr.length / 2))
    );
};

console.log(mergeSort([2,1,5,82,4,4,3,2,1,99]));
