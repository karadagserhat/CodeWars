function openOrSenior(data){
 
    const newdata = []
    
    for(let i = 0; i < data.length; i++){
      if(data[i][0] >= 55 && data[i][1] > 7){
        newdata.push("Senior")
      } else {
        newdata.push("Open")
      }
    }
    return newdata
  }


  //console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]));


  function a(data){
      return data.map(d => d[0] >= 55 && d[1] > 7 ? "Senior" : "Open")
    
}

console.log(a([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))




