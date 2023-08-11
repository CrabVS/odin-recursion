const fibs = function fibs(num, fibsArr = [0, 1]) {
    if (num <= fibsArr.length) {
        fibsArr.splice(num);
        return fibsArr;
    }

    let length = fibsArr.length;
    fibsArr.push(fibsArr[length - 1] + fibsArr[length - 2]);

    return fibs(num, fibsArr);
};

console.log(fibs(8));

