function duplicate(text){
    return text.toLowerCase().split('').filter(function(val,i,arr){
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) == i
    }).length
}

function duplicate2(text){
    return text.toLowerCase().split('').map(function(val,i,arr){
        return (arr.indexOf(val) !== i && arr.lastIndexOf(val) == i) ? val : ''
    }).join('').length
}

console.log(duplicate2("aabcdeba"));