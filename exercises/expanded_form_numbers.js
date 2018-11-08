function expandedForm(num) {

  let numStr = num.toString()
  let numlength = numStr.length
  let returnStr = ''

  for (let n=0; n < numlength; n++){
    let zeroCount = numlength - n - 1
    let x = 0
    let subNum = numStr[n]
    let remStr = numStr.slice(n,numStr.length)

    if (n < numlength - 1 && numStr[n] !== '0' && remStr.split('').includes(!0)){

     while (x < zeroCount) {
      subNum = subNum + '0'
      x++
      }

      returnStr = returnStr + subNum
    }  else if (n < numlength - 1 && numStr[n] !== '0'){

     while (x < zeroCount) {
      subNum = subNum + '0'
      x++
      }

      returnStr = returnStr + subNum + ' + '
    }
    else if (n == numlength - 1 && numStr[n]  !== '0') {
      returnStr = returnStr + subNum
    }
  }
  return returnStr
}
