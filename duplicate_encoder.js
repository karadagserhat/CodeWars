function duplicate(word){
    return word.toLowerCase().split('').map(function(val,i,arr){
        return (arr.indexOf(val) == arr.lastIndexOf(val) ? '(' : ')')
    }).join('')
}

function duplicate2(word){

    data = ''
    word = word.toLowerCase()
    for(let i = 0; i < word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
             data += '('
        } else {
            data += ')'
        }
    }

    return data

}



console.log(duplicate2("serhet"));