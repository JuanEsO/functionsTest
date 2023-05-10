function getSumPairs(arr, sum) {
    const pairs = arr.filter((item) => item%2 === 0);
    const sumPairs = pairs.reduce((acc, item) => acc + item, 0);
    return sumPairs;
}