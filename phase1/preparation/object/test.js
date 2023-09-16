function splitVersiGua(str, separtor) {
    let res = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
      //proses sebenernya ada disini
      if (str[i] !== separtor) {
        temp += str[i];
      } else {
        res.push(temp)
        temp = '';
      }
    }
    res.push(temp)
    return res
  }

  console.log(splitVersiGua('Jeff Bezoz+10%', "+"))