function sortArr(arr,sortType) {
    if(sortType == 'asc') {
        return arr.sort((a,b)=> a-b);
    } else if(sortType == 'desc') {
        return arr.sort((a,b)=> b-a);
    }
}


console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));