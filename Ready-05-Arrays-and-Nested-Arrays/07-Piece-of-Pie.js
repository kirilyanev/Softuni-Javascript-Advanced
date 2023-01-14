function pieceOfPie(arr,starting,ending) {
    const firstIndex = arr.indexOf(starting);
    const lastIndex = arr.indexOf(ending);
    const result = arr.slice(firstIndex,lastIndex+1);
    return result
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));