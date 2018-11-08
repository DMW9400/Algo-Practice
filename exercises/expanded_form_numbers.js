function expandedForm(num) {
  let subNumArr = []
  let numStr = num.toString()

  for (let n = 0; n < numStr.length; n++){
    let zeroCount = numStr.length - n - 1
    let x = 0
    let subNum = numStr[n]

    if(numStr[n] !== '0'){
       while (x < zeroCount) {
        subNum = subNum + '0'
        x++
      }
      subNumArr.push(subNum)
    }
  }
  return subNumArr.join(' + ')
}
