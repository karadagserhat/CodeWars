function count (string) {  
    var a = {};
    for (var i = 0 ; i< string.length; i++){
      a[string[i]]?a[string[i]]++:a[string[i]]=1;
    }
    return a;
 }


  function count2(string) {  
    return string.split("").reduce(function(obj, elem) {
      if (elem in obj)
        obj[elem]++;
      else
        obj[elem] = 1;
      return obj;
    }, {});
  }

  function count3 (string) {  
    return string.split('').reduce(function(o,v){ o[v] ? o[v]++ : (o[v] = 1); return o; }, {});
  }


  function count4 (string) {   
      
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  console.log(count("aba"))