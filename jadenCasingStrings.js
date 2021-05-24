function a(cümle){
    cümle = cümle.split(' ');
    for(let i = 0; i < cümle.length; i++){
        cümle[i] = cümle[i].charAt(0).toUpperCase() + cümle[i].slice(1)
    }
    return cümle.join(' ')
}

String.prototype.toJadenCase = function () {
    return this.split(' ').
      map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  };

  String.prototype.toJadenCase2 = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

console.log(a("How can mirrors be real if our eyes aren't real"));

console.log( "If a book store never runs".toJadenCase2() );