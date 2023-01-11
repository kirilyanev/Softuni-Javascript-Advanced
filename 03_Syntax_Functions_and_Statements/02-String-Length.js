function solve(strOne,strTwo,strThree) {
    let lengthSum = strOne.length + strTwo.length + strThree.length;
    let averageLength = Math.floor(lengthSum / 3);
    console.log(lengthSum);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');