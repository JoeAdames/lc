/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = []
    arr.forEach((item, i) => {
        if(fn(item, i)){
            newArr.push(item)
        }
    });
    return newArr
};