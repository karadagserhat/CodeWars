function squareSum(numbers){
    
    toplam = 0;

    for(let i = 0; i < numbers.length; i++){
        toplam += Math.pow(numbers[i],2)
    }

    return toplam
    
  
  }

  function squareSum2(numbers){
      return numbers.reduce(function(pre,curr){
        return curr*curr + pre
      },0);
  }

  function squareSum3(numbers){
      toplam = 0;
      numbers.map(e => e*e).map(e => toplam+= e)
      return toplam
  }

console.log(squareSum3([0, 3, 4, 5]));