/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArr = [];
    arr.forEach((item, i) => {
        returnedArr.push(fn(item, i))
    })
    return returnedArr
};