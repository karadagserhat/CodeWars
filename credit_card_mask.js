function maskify(cc){
    return cc.split('').map((karakter,index) => cc.length - 4 > index ? "#" : karakter).join('');
}

//console.log(maskify("abcsed1234567"));

function a(kelime){
    kelime = kelime.split('');

    for(let i = 0; i < kelime.length - 4; i++ ){
        kelime[i] = "#"
    }

    return kelime.join('');

}

console.log(a("s123455652344532"));