function noSpace(x){
   return x.replace(/ /g,'');
  
  }

  function noSpace2(x){
    return x.split(' ').join('');
   
   }

function noSpace3(x){
    let data = ""

    for(let i = 0; i < x.length; i++){
        if(x[i] !== ' '){
            data+= x[i]
        }
    }

    return data
}
   
console.log(noSpace3('8 j 8   mBliB8g  imjB8B8  jl  B'));