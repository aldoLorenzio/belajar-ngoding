function piramid2(num) {
    //code here
    for(let i = num; i >= 1; i--){
        let temp = ''
        for(let j = 1 ; j <= i; j++){
            temp += i
        }
        console.log(temp)
    }

    for(let i = 2; i <= num; i++){
        let temp = ''
        for(let j = 1; j <= i; j++){
            temp += i
        }
        console.log(temp)
    }
  }
  
  console.log(piramid2(5))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */