var maxSequence = function(arr){
    var max = 0 ;
    var sum = 0 ;
    for ( var i = 0 ; i < arr.length ; i ++ ){
      sum += arr[i] ;
      if ( sum > max ){
        max = sum ;
      }
      if ( sum < 0 ){
        sum = 0 ;
      }
    }
    return max ;
  }

  var maxSequence2 = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }

  var maxSequence3 = function(arr){
    var max = 0;
    var cur = 0;
    arr.forEach(function(i){
      cur = Math.max(0, cur + i);
      max = Math.max(max, cur);
    });
    return max;
  }


  console.log(maxSequence3([1 ,-5, -2,  7, 4]));